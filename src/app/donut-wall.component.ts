import { Component } from '@angular/core';
import { Donut } from './models/donut.interface';

@Component({
  selector: 'app-donut-wall',
  template: `
    <div class="logo">
      <img src="/assets/img/logo.png" />
    </div>
    <div class="wall">
      <ng-container *ngFor="let donut of donuts">
        <app-donut [donut]="donut"></app-donut>
        <!-- add button that emits the select event -->
      </ng-container>
    </div>
  `,
  styles: [
    `
      .logo {
        display: flex;
        flex-direction: row;
        justify-content: center;
        margin-bottom: 10px;
      }

      .wall {
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: flex-start;
        flex-wrap: wrap;
        margin: 20px 0;
      }
    `
  ]
})
export class DonutWallComponent {
  // add custom event emitter `select` that emits when a donut has been added

  /** The available donuts on the wall. */
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
}
