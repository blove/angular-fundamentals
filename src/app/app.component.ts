import { Component } from '@angular/core';
import { Donut } from './models/donut.interface';

@Component({
  selector: 'app-root',
  template: `
    <!-- Add output binding for the edit custom event -->
    <app-donut-wall (select)="onSelect($event)"></app-donut-wall>
    <!-- Add input binding for name property -->
    <app-box-of-donuts
      [donuts]="donuts"
      [size]="6"
      (remove)="onRemove($event)"
    ></app-box-of-donuts>

    <div class="customer-form">
      <!-- add input for the customer's name -->
    </div>

    <div class="donut-form">
      <h2>Donut Kitchen</h2>
      <!-- add form -->
      <!-- add name input -->
      <!-- add price input -->
    </div>
  `,
  styleUrls: ['app.component.css']
})
export class AppComponent {
  /** The selected donuts in the box. */
  donuts: Donut[] = [];

  // add a donut property for the donut that is being edited

  // add name property

  onRemove(donut: Donut): void {
    const index = this.donuts.findIndex(d => d.name === donut.name);
    if (index === -1) {
      return;
    }

    this.donuts.splice(index, 1);
  }

  onSelect(donut: Donut): void {
    this.donuts = [...this.donuts, donut];
  }
}
