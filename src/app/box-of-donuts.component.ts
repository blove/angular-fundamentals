import { Component, Input } from '@angular/core';
import { Donut } from './models/donut.interface';

@Component({
  selector: 'app-box-of-donuts',
  template: `
    <p>
      <span *ngIf="size < 5">Small</span><span *ngIf="size > 7">Large</span> Box
    </p>
    <p *ngIf="isFull()">Box full</p>
    <app-donut *ngFor="let donut of donuts" [donut]="donut"></app-donut>
  `
})
export class BoxOfDonutsComponent {
  donuts: Donut[] = [
    { name: 'Bacon glazed', icing: true },
    { name: 'Sirachi Infused', icing: false }
  ];

  @Input() size = 6;

  isFull(): boolean {
    return this.donuts.length === this.size;
  }
}
