import { Component, OnInit } from '@angular/core';

const DEFAULT_HEIGHT = 5;

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

  constructor() { }

  ngOnInit() {
    this.resetStacks();
  }

  solve(n, source, target, auxiliary) {
    if (n > 0) {
      this.solve(n - 1, source, auxiliary, target);

      target.unshift(source.shift());

      this.solve(n - 1, auxiliary, target, source);
    }
  }

  resetStacks() {
    for (let index in this.stacks) {
      this.stacks[index] = [];
    }

    for (let i = +this.height; i >= 1; i--) {
      this.stacks[0].unshift(i);
    }
  }

}
