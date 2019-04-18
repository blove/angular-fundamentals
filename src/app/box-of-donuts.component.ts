import { Component, Input } from '@angular/core';
import { Donut } from './models/donut.interface';

@Component({
  selector: 'app-box-of-donuts',
  template: `
    <div class="heading">
      <div>
        <span *ngIf="size < 5">Small</span>
        <span *ngIf="size > 7">Large</span>
        Box
      </div>
      <div>
        {{ donuts ? donuts.length : 0 }}/{{ size }}
        <span *ngIf="isFull()">Box full</span>
      </div>
    </div>
    <div class="donuts">
      <ng-container *ngFor="let donut of donuts">
        <app-donut [donut]="donut"></app-donut>
        <!-- add button that emits the remove event -->
      </ng-container>
    </div>
  `,
  styles: [
    `
      :host {
        border: 4px solid #e91e63;
      }

      .selected {
        background: #efefef;
      }

      .heading {
        background-color: #f8bbd0;
        padding: 10px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
      }

      .donuts {
        padding: 10px;
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: flex-start;
        flex-wrap: wrap;
      }
    `
  ]
})
export class BoxOfDonutsComponent {
  /** The donuts in the box. */
  @Input() donuts: Donut[];

  // add custom remove event emitter that emits a Donut object

  /** The size of the box. This is the maximum number of donuts it can hold. */
  @Input() size = 6;

  isFull(): boolean {
    return this.donuts && this.donuts.length === this.size;
  }
}
