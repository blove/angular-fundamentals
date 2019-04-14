import { Component } from '@angular/core';
import { Donut } from './models/donut.interface';

@Component({
  selector: 'app-box-of-donuts',
  template: `
    <!-- Display the size of the box -->
    <app-donut [donut]="donut" style="display: inline-block;"></app-donut>
  `
})
export class BoxOfDonutsComponent {
  donut: Donut = { name: 'Bacon glazed' };

  // add `size` input to set the number of donuts the box can hold
}
