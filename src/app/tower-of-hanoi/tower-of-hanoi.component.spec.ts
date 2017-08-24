import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TowerOfHanoiComponent } from './tower-of-hanoi.component';

describe('TowerOfHanoiComponent', () => {
  let component: TowerOfHanoiComponent;
  let fixture: ComponentFixture<TowerOfHanoiComponent>;

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
    const stacks = [
      [5, 4, 3, 2, 1],
      [],
      []
    ];

    component.solve(stacks[0].length, stacks[0], stacks[1], stacks[2]);
    expect(stacks[0]).toEqual([]);
    expect(stacks[1]).toEqual([]);
    expect(stacks[2]).toEqual([5, 4, 3, 2, 1]);
  });

  it('should populate stacks[0] with specified height down to 1', () => {
    component.height = 7;
    component.stacks[1] = [2, 1];
    component.resetStacks();
    expect(component.stacks[0]).toEqual([7, 6, 5, 4, 3, 2, 1]);
    expect(component.stacks[1]).toEqual([]);
    expect(component.stacks[2]).toEqual([]);
  });
});
