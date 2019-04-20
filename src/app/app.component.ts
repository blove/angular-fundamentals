import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Donut } from './models/donut.interface';

@Component({
  selector: 'app-root',
  template: `
    <app-donut-wall
      (edit)="donut = $event"
      (select)="onSelect($event)"
    ></app-donut-wall>
    <app-box-of-donuts
      [donuts]="donuts"
      [name]="name"
      [size]="6"
      (remove)="onRemove($event)"
    ></app-box-of-donuts>

    <div class="customer-form">
      <h2>Customer</h2>
      <input [(ngModel)]="name" />
    </div>

    <div class="donut-form" *ngIf="donut">
      <h2>Donut Kitchen</h2>
      <!-- Use reactive forms instead of template-driven forms -->
      <form #donutForm="ngForm" (ngSubmit)="onSubmit(donutForm)">
        <input name="name" [(ngModel)]="donut.name" required />
        <input name="price" [(ngModel)]="donut.price" required />
      </form>
    </div>
  `,
  styleUrls: ['app.component.css']
})
export class AppComponent {
  /** The selected donuts in the box. */
  donuts: Donut[] = [];

  /** The donut that is in the kitched (edited). */
  donut: Donut;

  // declare donutForm FormGroup instance

  /** The customer's name. */
  name: string;

  // declare constructor function that requires the FormBuilder instance
  // declare the donutForm using the FormBuilder.group instance method

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

  // remove form argument and reference donutForm FormGroup instance
  onSubmit(form: NgForm): void {
    console.log(form.value);
    console.log(form.valid);
  }
}
