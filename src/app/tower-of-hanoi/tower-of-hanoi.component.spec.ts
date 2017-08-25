import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsModule } from '@angular/forms';

import { RangeDirective } from '../directives/range/range.directive';
import { TowerOfHanoiComponent } from './tower-of-hanoi.component';

describe('TowerOfHanoiComponent', () => {
  let component: TowerOfHanoiComponent;
  let fixture: ComponentFixture<TowerOfHanoiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule
      ],
      declarations: [
        TowerOfHanoiComponent,
        RangeDirective
      ]
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
      [1, 2, 3, 4, 5],
      [],
      []
    ];

    component.solve(stacks[0].length, stacks[0], stacks[2], stacks[1]);
    expect(stacks[0]).toEqual([]);
    expect(stacks[1]).toEqual([]);
    expect(stacks[2]).toEqual([1, 2, 3, 4, 5]);
  });

  it('should populate stacks[0] with specified height down to 1', () => {
    component.height = 7;
    component.stacks[1] = [1, 2];
    component.resetStacks();
    expect(component.stacks[0]).toEqual([1, 2, 3, 4, 5, 6, 7]);
    expect(component.stacks[1]).toEqual([]);
    expect(component.stacks[2]).toEqual([]);
  });
});
