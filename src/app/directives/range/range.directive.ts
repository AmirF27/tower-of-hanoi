import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[range]'
})
export class RangeDirective {

  _range: number[];

  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef
  ) { }

  @Input()
  set range(r: number[]) {
    if (r.length != 2) {
      throw new Error('Range array should have exactly 2 elements');
    }

    this.viewContainer.clear();
    this._range = this.generateRange(r[0], r[1]);

    for (let n of this._range) {
      this.viewContainer.createEmbeddedView(this.templateRef, {
        $implicit: n
      });
    }
  }

  private generateRange(start: number, end: number) {
    const r = [];

    for (let i = start; i <= end; i++) {
      r.push(i);
    }

    return r;
  }

}
