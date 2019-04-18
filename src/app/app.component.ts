import { Component } from '@angular/core';
import { Donut } from './models/donut.interface';

@Component({
  selector: 'app-root',
  template: `
    <!-- add output binding and invoke the addDonut() method -->
    <app-donut-wall></app-donut-wall>
    <!-- add output binding and invoke the removeDonuts() method -->
    <app-box-of-donuts [donuts]="donuts" [size]="6"></app-box-of-donuts>
  `,
  styleUrls: ['app.component.css']
})
export class AppComponent {
  /** The selected donuts in the box. */
  donuts: Donut[] = [];

  // declare addDonut method that accepts a donut and appends it to the array of selected donuts

  // declare removeDonut method that accepts a donut and removes it from the array of selected donuts
}
