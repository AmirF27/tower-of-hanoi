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

  constructor() { }

  ngOnInit() {
    this.resetStacks();
  }

  solve(n, source, target, auxiliary) {
    if (n > 0) {
      this.solve(n - 1, source, auxiliary, target);

      target.push(source.pop());

      this.solve(n - 1, auxiliary, target, source);
    }
  }

  resetStacks() {
    this.stacks[0] = [];
    this.stacks[1] = [];
    this.stacks[2] = [];

    for (let i = +this.height; i >= 1; i--) {
      this.stacks[0].push(i);
    }

    console.log(this.stacks[0]);
  }

}
