import { Component, Input } from '@angular/core';
import { Donut } from './models/donut.interface';

@Component({
  selector: 'app-donut',
  template: `
    <p>Donut name: {{ donut.name }} <span *ngIf="donut.icing">(icing)</span></p>
  `
})
export class DonutComponent {
  @Input() donut: Donut;
}
