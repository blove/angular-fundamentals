import {
  Component,
  OnChanges,
  SimpleChanges,
  Input,
  Output,
  EventEmitter
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { donutNameValidator } from '../../validators/donut-name.validator';
import { Donut } from '../../models/donut.interface';

@Component({
  selector: 'app-donut-form',
  templateUrl: './donut-form.component.html',
  styleUrls: ['./donut-form.component.css']
})
export class DonutFormComponent implements OnChanges {
  /** The donut that is being edited/fried. */
  @Input() donut: Donut;

  /** Emit event when the donut is saved. */
  @Output() save = new EventEmitter<Donut>();

  /** The form to modify a donut. */
  donutFormGroup: FormGroup;

  constructor(formBuilder: FormBuilder) {
    this.donutFormGroup = formBuilder.group({
      name: ['', [Validators.required, donutNameValidator()]],
      price: ['', [Validators.required, Validators.min(0.5)]]
    });
  }

  ngOnChanges(simpleChanges: SimpleChanges) {
    if (simpleChanges.donut && simpleChanges.donut.currentValue) {
      this.donutFormGroup.patchValue(this.donut);
    }
  }

  onSubmit(): void {
    if (!this.donutFormGroup.valid) {
      return;
    }
    this.save.emit({ ...this.donut, ...this.donutFormGroup.value });
  }
}
