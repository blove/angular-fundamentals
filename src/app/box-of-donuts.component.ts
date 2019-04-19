import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges
  } from '@angular/core';
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
        {{ donuts ? donuts.length : 0 }}/{{ size | number: '2.0' }}
        <span *ngIf="isFull()">Box full</span>
      </div>
    </div>
    <div class="donuts">
      <div class="donut" *ngFor="let donut of donuts">
        <app-donut [donut]="donut"></app-donut>
        <button (click)="remove.emit(donut)">remove</button>
      </div>
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

      .donut {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
      }

      .donut > button {
        background: transparent;
        border: 1px solid #999;
      }
    `
  ]
})
export class BoxOfDonutsComponent implements OnChanges {
  /** The donuts in the box. */
  @Input() donuts: Donut[];

  /** Remove a donut from the box. */
  @Output() remove = new EventEmitter<Donut>();

  /** The size of the box. This is the maximum number of donuts it can hold. */
  @Input() size = 6;

  ngOnChanges(simpleChanges: SimpleChanges) {
    console.log(this.donuts.length);

    if (
      simpleChanges.donuts &&
      simpleChanges.donuts.currentValue &&
      this.donuts.length > this.size
    ) {
      this.donuts.pop();
    }
  }

  isFull(): boolean {
    return this.donuts && this.donuts.length === this.size;
  }
}
