import { Component, Input } from '@angular/core';
import { Donut } from './models/donut.interface';

@Component({
  selector: 'app-donut',
  template: `
    <div class="name">
      <!-- Hide the icing label when a donut has a fileName -->
      {{ donut.name }} <span *ngIf="donut.icing">(icing)</span>
    </div>
    <!-- Add image displaying the donut.fileName when specified. -->
    <!-- Then, add the alt attribute to the image using the donut.name value. -->
  `
})
export class DonutComponent {
  @Input() donut: Donut;
}
