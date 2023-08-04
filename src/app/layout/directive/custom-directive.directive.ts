import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appCustomDirective]'
})
export class CustomDirectiveDirective {
  constructor(
    private template: TemplateRef<any>,
    private viewContainer: ViewContainerRef
  ) {}

  @Input('appCustomDirective') set appCustomDirective(condition: boolean) {
    if (condition) {
      this.viewContainer.createEmbeddedView(this.template);
    } else {
      this.viewContainer.clear();
    }
  }
}
