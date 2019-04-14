import { Component, Input } from '@angular/core';
import { Donut } from './models/donut.interface';

@Component({
  selector: 'app-donut',
  template: `
    <div class="name">
      <!-- Hide the name when the showName property is false -->
      {{ donut.name }}
      <span
        *ngIf="donut.icing"
        [hidden]="donut.fileName && donut.fileName.length > 0"
        >(icing)</span
      >
    </div>
    <img
      *ngIf="donut.fileName && donut.fileName.length > 0"
      [alt]="donut.name"
      [src]="donut.fileName"
    />
  `
})
export class DonutComponent {
  @Input() donut: Donut;

  // add a showName input property that toggles the name
}
