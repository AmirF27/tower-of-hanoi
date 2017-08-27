import { Component, OnInit } from '@angular/core';

const DEFAULT_HEIGHT = 5;
const DEFAULT_DELAY = 300;
const MIN_DELAY = DEFAULT_DELAY;

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
  private speeds = [
    'Very fast',
    'Fast',
    'Medium',
    'Slow',
    'Very slow'
  ];
  private minDelay = MIN_DELAY;

  constructor() { }

  ngOnInit() {
    this.reset();
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
  }

  solve() {
    if (!this.solved) {
      this.solving = true;

      let { first, second } = this.determineMoveOrder();

      let moves = this.initiateMoves(first, second);
      let interval = setInterval(() => {
        if (!this.solving || moves.next().done) {
          clearInterval(interval);
          this.solving = false;
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
      yield this.makeMove(this.stacks[0], this.stacks[first]);
      yield this.makeMove(this.stacks[0], this.stacks[second]);
      yield this.makeMove(this.stacks[1], this.stacks[2]);
    }
  }

  private makeMove(stack1: Array<number>, stack2: Array<number>) {
    let { source, target } = this.determineLegalMove(stack1, stack2);

    if (!this.checkSolved() && (source && target)) {
      target.unshift(source.shift());
    }
  }

  private determineLegalMove(stack1: Array<number>, stack2: Array<number>) {
    let source = null;
    let target = null;

    if (stack1.length > 0) {
      if (stack2.length == 0 || stack1[0] < stack2[0]) {
        source = stack1;
        target = stack2;
      } else {
        source = stack2;
        target = stack1;
      }
    } else if (stack2.length > 0) {
      source = stack2;
      target = stack1;
    }

    return { source, target };
  }

  private checkSolved(): boolean {
    return this.solved = this.stacks[2].length == this.height;
  }

}
