import { Component } from '@angular/core';

@Component({
  selector: 'tower-of-hanoi',
  templateUrl: './tower-of-hanoi.component.html',
  styleUrls: ['./tower-of-hanoi.component.scss']
})
export class TowerOfHanoiComponent {

  stacks = [
    [5, 4, 3, 2, 1],
    [],
    []
  ];

  constructor() { }

  solve(n, source, target, auxiliary) {
    if (n > 0) {
      this.solve(n - 1, source, auxiliary, target);

      target.push(source.pop());

      this.solve(n - 1, auxiliary, target, source);
    }
  }
}
