import { TestBed, ComponentFixture } from '@angular/core/testing';
import { Component, DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

import { RangeDirective } from './range.directive';

@Component({
  template: `<div *range="[3]"></div>`
})
class ErrorTestComponent {}

@Component({
  template: `<div>
               <p *range="[1, 3]"></p>
             </div>`
})
class CorrectTestComponent {}

@Component({
  template: `<div>
               <p *range="[3, 1]"></p>
             </div>`
})
class EmptyTestComponent {}

describe('RangeDirective', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        ErrorTestComponent,
        CorrectTestComponent,
        EmptyTestComponent,
        RangeDirective
      ]
    }).compileComponents();
  });

  it('should throw error if range array length is not 2', () => {
    expect(() => {
      TestBed.createComponent(ErrorTestComponent).detectChanges();
    }).toThrowError();
  });

  it('should create correct number of elements based on range', () => {
    let fixture = TestBed.createComponent(CorrectTestComponent);
    fixture.detectChanges();

    let component = fixture.componentInstance;
    let element = fixture.debugElement.query(By.css('div'));

    expect(element.children.length).toBe(3);
  });

  it('should not create any elements when first number in range is not smaller than second', () => {
    let fixture = TestBed.createComponent(EmptyTestComponent);
    fixture.detectChanges();

    let component = fixture.componentInstance;
    let element = fixture.debugElement.query(By.css('div'));

    expect(element.children.length).toBe(0);
  });
});
