import { Component } from '@angular/core';
import { Donut } from './models/donut.interface';

@Component({
  selector: 'app-root',
  template: `
    <app-donut-wall (select)="onSelect($event)"></app-donut-wall>
    <app-box-of-donuts
      [donuts]="donuts"
      [size]="6"
      (remove)="onRemove($event)"
    ></app-box-of-donuts>
  `,
  styleUrls: ['app.component.css']
})
export class AppComponent {
  /** The selected donuts in the box. */
  donuts: Donut[] = [];

  onRemove(donut: Donut): void {
    const index = this.donuts.findIndex(d => d.name === donut.name);
    if (index === -1) {
      return;
    }

    this.donuts.splice(index, 1);
  }

  onSelect(donut: Donut): void {
    this.donuts.push(donut);
  }
}
