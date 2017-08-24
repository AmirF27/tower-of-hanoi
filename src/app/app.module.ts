import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

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
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
