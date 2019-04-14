import { Component, Input } from '@angular/core';
import { Donut } from './models/donut.interface';

@Component({
  selector: 'app-donut',
  template: `
    <!-- Add text indicator "(icing)" when the donut has icing -->
    <p>Donut name: {{ donut.name }}</p>
  `
})
export class DonutComponent {
  @Input() donut: Donut;
}
