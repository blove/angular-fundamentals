import { Component, Input } from '@angular/core';
import { Donut } from './models/donut.interface';

@Component({
  selector: 'app-donut',
  template: `
    <div class="name">
      <span [hidden]="!showName">{{ donut.name }}</span>
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
  /**
   * Add styles property and copy styles from the root styles.css
   */
})
export class DonutComponent {
  @Input() donut: Donut;

  @Input() showName: boolean;
}
