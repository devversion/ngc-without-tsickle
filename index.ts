import {Component, NgModule, Input} from '@angular/core';

@Component({
  selector: 'test',
  template: '<span>My component</span>'
})
export class MyTest {
  @Input() element: HTMLElement|undefined;
}

@NgModule({
  declarations: [MyTest],
})
export class MyModule {}