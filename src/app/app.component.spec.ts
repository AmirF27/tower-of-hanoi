import { TestBed, async } from '@angular/core/testing';

import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TowerOfHanoiComponent } from './tower-of-hanoi/tower-of-hanoi.component';
import { RangeDirective } from './directives/range/range.directive';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule
      ],
      declarations: [
        AppComponent,
        TowerOfHanoiComponent,
        RangeDirective
      ],
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it(`should have as title 'Tower of Hanoi solver'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('Tower of Hanoi solver');
  }));

  it('should render title in a h2 tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h2').textContent).toContain('Tower of Hanoi solver');
  }));
});
