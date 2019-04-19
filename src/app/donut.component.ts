import { Component, Input } from '@angular/core';
import { Donut } from './models/donut.interface';

@Component({
  selector: 'app-donut',
  template: `
    <div class="heading">
      <div class="name">{{ donut.name }}</div>
      <div class="price">{{ donut.price | currency }}</div>
    </div>
    <img
      *ngIf="donut.fileName && donut.fileName.length > 0"
      [alt]="donut.name"
      [src]="donut.fileName"
    />
  `,
  styles: [
    `
      :host {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
        text-align: center;
        margin: 10px;
      }

      .heading {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
      }
    `
  ]
})
export class DonutComponent {
  @Input() donut: Donut;
}
