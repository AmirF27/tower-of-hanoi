import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TowerOfHanoiComponent } from './tower-of-hanoi.component';

describe('TowerOfHanoiComponent', () => {
  let component: TowerOfHanoiComponent;
  let fixture: ComponentFixture<TowerOfHanoiComponent>;

  const stacks = [
    [5, 4, 3, 2, 1],
    [],
    []
  ];

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TowerOfHanoiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TowerOfHanoiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('should solve puzzle correctly', () => {
    component.solve(stacks[0].length, stacks[0], stacks[1], stacks[2]);
    expect(stacks[0]).toEqual([]);
    expect(stacks[1]).toEqual([]);
    expect(stacks[2]).toEqual([5, 4, 3, 2, 1]);
  });
});
