import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TowerOfHanoiComponent } from './tower-of-hanoi.component';

describe('TowerOfHanoiComponent', () => {
  let component: TowerOfHanoiComponent;
  let fixture: ComponentFixture<TowerOfHanoiComponent>;

  let stacks = {
    a: [5, 4, 3, 2, 1],
    b: [],
    c: []
  }

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
    component.solve(stacks.a.length, stacks.a, stacks.c, stacks.b);
    expect(stacks.a).toEqual([]);
    expect(stacks.b).toEqual([]);
    expect(stacks.c).toEqual([5, 4, 3, 2, 1]);
  });
});
