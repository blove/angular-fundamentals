import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Donut } from './models/donut.interface';
import { donutNameValidator } from './validators/donut-name.validator';

@Component({
  selector: 'app-root',
  template: `
    <app-donut-wall
      (edit)="onEdit($event)"
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
      <form [formGroup]="donutFormGroup" (ngSubmit)="onSubmit()">
        <input name="name" formControlName="name" />
        <div *ngIf="!!donutFormGroup.get('name').errors?.donutName">
          The name must specify the topping: coated, dipped or frosted.
        </div>
        <input name="price" formControlName="price" />
        <button type="submit" [disabled]="!donutFormGroup.valid">
          Fry it!
        </button>
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

  /** The form to modify a donut. */
  donutFormGroup: FormGroup;

  /** The customer's name. */
  name: string;

  constructor(formBuilder: FormBuilder) {
    this.donutFormGroup = formBuilder.group({
      name: ['', [Validators.required, donutNameValidator()]],
      price: ['', [Validators.required, Validators.min(0.5)]]
    });
  }

  onEdit(donut: Donut): void {
    this.donut = donut;
    this.donutFormGroup.patchValue(donut);
  }

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

  onSubmit(): void {
    console.log(this.donutFormGroup.valid);
    console.log(this.donutFormGroup.value);
  }
}
