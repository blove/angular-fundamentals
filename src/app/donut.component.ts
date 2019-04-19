import { Component, Input } from '@angular/core';
import { Donut } from './models/donut.interface';

@Component({
  selector: 'app-donut',
  template: `
    <div class="name">
      {{ donut.name }}
      <!-- add the donut price -->
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
        width: 25%;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
        text-align: center;
        margin: 10px 0;
      }

      .heading {
        padding: 10px;
      }
    `
  ]
})
export class DonutComponent {
  @Input() donut: Donut;
}
