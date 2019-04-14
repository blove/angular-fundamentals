import { Component, Input } from '@angular/core';
import { Donut } from './models/donut.interface';

@Component({
  selector: 'app-box-of-donuts',
  template: `
    <div class="heading">
      <span *ngIf="size < 5">Small</span><span *ngIf="size > 7">Large</span> Box
      <p *ngIf="isFull()">Box full</p>
    </div>
    <div class="donuts">
      <!-- Add property binding for the showName property -->
      <app-donut *ngFor="let donut of donuts" [donut]="donut"></app-donut>
    </div>
    <!-- Add a button with a click event handler that will toggle the showName property -->
  `
})
export class BoxOfDonutsComponent {
  donuts: Donut[] = [
    {
      name: 'Chocolate Frosted',
      icing: true,
      fileName: 'assets/img/donuts/donut1.png'
    },
    {
      name: 'Strawberry Frosted',
      icing: true,
      fileName: 'assets/img/donuts/donut2.png'
    },
    {
      name: 'Chocolate Dipped',
      icing: true,
      fileName: 'assets/img/donuts/donut3.png'
    },
    {
      name: 'Cherry Dipped',
      icing: true,
      fileName: 'assets/img/donuts/donut4.png'
    },
    { name: 'Sirachi Infused', icing: false }
  ];

  // add a showName property that is a boolean value

  @Input() size = 6;

  isFull(): boolean {
    return this.donuts.length === this.size;
  }
}
