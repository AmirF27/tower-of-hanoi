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

  it('should populate stacks[0] with specified height down to 1', () => {
    component.height = 7;
    component.stacks[1] = [1, 2];
    component.reset();
    expect(component.stacks[0]).toEqual([1, 2, 3, 4, 5, 6, 7]);
    expect(component.stacks[1]).toEqual([]);
    expect(component.stacks[2]).toEqual([]);
    expect(component.solved).toBe(false);
  });

  it('should solve puzzle correctly', () => {
    component.reset();

    component.solve();
    expect(component.stacks[0]).toEqual([]);
    expect(component.stacks[1]).toEqual([]);
    expect(component.stacks[2]).toEqual([1, 2, 3, 4, 5]);
  });
});
