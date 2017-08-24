import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TowerOfHanoiComponent } from './tower-of-hanoi/tower-of-hanoi.component';
import { RangeDirective } from './directives/range/range.directive';

@NgModule({
  declarations: [
    AppComponent,
    TowerOfHanoiComponent,
    RangeDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
