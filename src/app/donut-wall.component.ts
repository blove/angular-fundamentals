import { Component, EventEmitter, Output } from '@angular/core';
import { Donut } from './models/donut.interface';

@Component({
  selector: 'app-donut-wall',
  template: `
    <div class="logo">
      <img src="/assets/img/logo.png" />
    </div>
    <div class="wall">
      <div class="donut" *ngFor="let donut of donuts">
        <app-donut [donut]="donut"></app-donut>
        <button (click)="select.emit(donut)">select</button>
        <button (click)="edit.emit(donut)">edit</button>
      </div>
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

      .donut {
        width: 100px;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
      }

      .donut > button {
        background: transparent;
        border: 1px solid #999;
      }

      .donut > button + button {
        margin-top: 5px;
      }
    `
  ]
})
export class DonutWallComponent {
  /** The available donuts on the wall. */
  donuts: Donut[] = [
    {
      name: 'Chocolate Frosted',
      icing: true,
      fileName: 'assets/img/donuts/donut1.png',
      price: 0.5
    },
    {
      name: 'Strawberry Frosted',
      icing: true,
      fileName: 'assets/img/donuts/donut2.png',
      price: 0.5
    },
    {
      name: 'Chocolate Dipped',
      icing: true,
      fileName: 'assets/img/donuts/donut3.png',
      price: 0.25
    },
    {
      name: 'Cherry Dipped',
      icing: true,
      fileName: 'assets/img/donuts/donut4.png',
      price: 0.25
    },
    {
      name: 'Strawberry Dipped',
      icing: true,
      fileName: 'assets/img/donuts/donut5.png',
      price: 0.25
    },
    {
      name: 'Vanilla Dipped',
      icing: true,
      fileName: 'assets/img/donuts/donut6.png',
      price: 0.25
    },
    {
      name: 'Cherry Coated',
      icing: true,
      fileName: 'assets/img/donuts/donut7.png',
      price: 0.75
    }
  ];

  /** Emit event when a donut is being edited. */
  @Output() edit = new EventEmitter<Donut>();

  /** Emit event when a donut is selected from the wall. */
  @Output() select = new EventEmitter<Donut>();
}
