import {
  Component,
  OnChanges,
  Input,
  Output,
  EventEmitter,
  SimpleChanges
} from '@angular/core';
import { Donut } from '../../models/donut.interface';

@Component({
  selector: 'app-box-of-donuts',
  templateUrl: './box-of-donuts.component.html',
  styleUrls: ['./box-of-donuts.component.css']
})
export class BoxOfDonutsComponent implements OnChanges {
  /** The donuts in the box. */
  @Input() donuts: Donut[];

  /** The customer's name. */
  @Input() name: string;

  /** Remove a donut from the box. */
  @Output() remove = new EventEmitter<Donut>();

  /** The size of the box. This is the maximum number of donuts it can hold. */
  @Input() size = 6;

  ngOnChanges(simpleChanges: SimpleChanges) {
    if (
      simpleChanges.donuts &&
      simpleChanges.donuts.currentValue &&
      this.donuts.length > this.size
    ) {
      this.donuts.pop();
    }
  }

  isFull(): boolean {
    return this.donuts && this.donuts.length === this.size;
  }
}
