import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <app-box-of-donuts [size]="6"></app-box-of-donuts>
  `
})
export class AppComponent {}
