import { Component, Input } from '@angular/core';
import { Donut } from './models/donut.interface';

@Component({
  selector: 'app-box-of-donuts',
  template: `
    <!-- Show "small box" when 4 or less, "large box" when 8 or more, otherwise just "box" -->
    <p>Size: {{ size }}</p>
    <!-- Show "box full" when the number of donuts equals the size of the box -->
    <!-- Show all donuts in the box using NgFor -->
    <app-donut [donut]="donuts[0]"></app-donut>
  `
})
export class BoxOfDonutsComponent {
  donuts: Donut[] = [
    { name: 'Bacon glazed', icing: true },
    { name: 'Sirachi Infused', icing: false }
  ];

  @Input() size = 6;
}
