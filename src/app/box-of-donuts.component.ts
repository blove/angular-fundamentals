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
      <!-- Add click event handler to set the selectedDonut -->
      <!-- Add the 'selected' class to the app-donut component when it is the currently selected donut -->
      <app-donut
        *ngFor="let donut of donuts"
        [donut]="donut"
        [showName]="showName"
      ></app-donut>
    </div>
    <button (click)="showName = !showName"></button>
  `,
  styles: [
    `
      .selected {
        background: #efefef;
      }

      /**
       * Copy styles for app-box-of-donuts from the root styles.css file.
       */
    `
  ]
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
    {
      name: 'Strawberry Dipped',
      icing: true,
      fileName: 'assets/img/donuts/donut5.png'
    },
    {
      name: 'Vanilla Dipped',
      icing: true,
      fileName: 'assets/img/donuts/donut6.png'
    },
    {
      name: 'Cherry Coated',
      icing: true,
      fileName: 'assets/img/donuts/donut7.png'
    }
  ];

  @Input() size = 6;

  // add a selectedDonut property that is of type `Donut`

  showName = true;

  isFull(): boolean {
    return this.donuts.length === this.size;
  }
}
