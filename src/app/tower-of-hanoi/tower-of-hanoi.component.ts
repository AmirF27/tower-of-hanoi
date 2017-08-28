import { Component, OnInit } from '@angular/core';

const sharedVars = require('../../shared/shared-variables.json');

const DEFAULT_HEIGHT = 5;
const DEFAULT_DELAY = sharedVars['default-delay'];
const MIN_DELAY = sharedVars['min-delay'];

@Component({
  selector: 'tower-of-hanoi',
  templateUrl: './tower-of-hanoi.component.html',
  styleUrls: ['./tower-of-hanoi.component.scss']
})
export class TowerOfHanoiComponent implements OnInit {

  stacks = [
    [],
    [],
    []
  ];
  height: number = DEFAULT_HEIGHT;
  delay: number = DEFAULT_DELAY;

  private solving: boolean = false;
  private solved: boolean = false;
  private stackNames = sharedVars['stack-names'];
  private speeds;
  private minDelay = MIN_DELAY;
  private currentMove = null;
  private interval;

  constructor() { }

  ngOnInit() {
    this.reset();
    this.formatSpeeds();
  }

  reset() {
    for (let index in this.stacks) {
      this.stacks[index] = [];
    }

    for (let i = +this.height; i >= 1; i--) {
      this.stacks[0].unshift(i);
    }

    this.solving = false;
    this.solved = false;
    this.currentMove = null;

    clearInterval(this.interval);
  }

  solve() {
    if (!this.solved) {
      this.solving = true;

      let { first, second } = this.determineMoveOrder();

      let moves = this.initiateMoves(first, second);
      this.interval = setInterval(() => {
        let currentMove = moves.next();
        if (!this.solving || currentMove.done) {
          clearInterval(this.interval);
        } else {
          this.currentMove = currentMove.value;
        }
      }, this.delay);
    }
  }

  private determineMoveOrder() {
    let [first, second] = [1, 2];

    if (this.height % 2 != 0) {
      [first, second] = [second, first];
    }

    return { first, second };
  }

  private* initiateMoves(first: number, second: number) {
    while (!this.solved) {
      yield this.makeMove(0, first);
      yield this.makeMove(0, second);
      yield this.makeMove(1, 2);
    }
  }

  private makeMove(stack1: number, stack2: number) {
    let { source, target } = this.determineLegalMove(stack1, stack2);

    if (!this.checkSolved() && (source >= 0 && target >= 0) && this.solving) {
      this.stacks[target].unshift(this.stacks[source].shift());
    }

    return { source, target };
  }

  private determineLegalMove(stack1: number, stack2: number) {
    let source = -1;
    let target = -1;

    if (this.stacks[stack1].length > 0) {
      if (this.stacks[stack2].length == 0 ||
          this.stacks[stack1][0] < this.stacks[stack2][0]) {
        source = stack1;
        target = stack2;
      } else {
        source = stack2;
        target = stack1;
      }
    } else if (this.stacks[stack2].length > 0) {
      source = stack2;
      target = stack1;
    }

    return { source, target };
  }

  private checkSolved(): boolean {
    return this.solved = this.stacks[2].length == this.height;
  }

  private isCurrentMove(stack: number, disk: number): boolean {
    return this.currentMove
      && stack == this.currentMove.target
      && this.stacks[stack][0] == disk;
  }

  private getMoveAnimationClass(): string {
    if (!this.currentMove) return '';

    let className = `${this.stackNames[this.currentMove.source]}`;
    className += `-${this.stackNames[this.currentMove.target]}`;
    className += `-${this.stacks[this.currentMove.source].length + 1}`;
    className += `-${this.stacks[this.currentMove.target].length}`;

    let animationSpeed = this.speeds[this.delay / this.minDelay - 1]
                         .toLowerCase()
                         .replace(' ', '-');

    className += ` animation-speed-${animationSpeed}`;

    return className;
  }

  private formatSpeeds() {
    this.speeds = sharedVars['animation-speeds'].map(speed => {
      return (speed.charAt(0).toUpperCase() + speed.slice(1)).replace('-', ' ');
    });
  }

}
