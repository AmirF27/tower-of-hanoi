import { Component, OnInit } from '@angular/core';

const DEFAULT_HEIGHT = 5;
const DEFAULT_DELAY = 300;

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

  // for use with naming CSS classes for the stacks
  stackNames = [
    'left',
    'middle',
    'right'
  ];

  solved: boolean = false;

  delay: number = DEFAULT_DELAY;

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

    this.solved = false;
  }

  solve() {
    if (!this.solved) {
      let first = 1, second = 2;
      if (this.height % 2 != 0) {
        [first, second] =  [second, first]
      }

      let it = this.executeMoves(first, second);
      let interval = setInterval(() => {
        if (it.next().done) {
          clearInterval(interval);
        }
      }, this.delay);
    }
  }

  private* executeMoves(first: number, second: number) {
    while (!this.solved) {
      yield this.makeMove(this.stacks[0], this.stacks[first]);
      yield this.makeMove(this.stacks[0], this.stacks[second]);
      yield this.makeMove(this.stacks[1], this.stacks[2]);
    }
  }

  private makeMove(stack1: Array<number>, stack2: Array<number>) {
    var { source, target } = this.determineLegalMove(stack1, stack2);

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
