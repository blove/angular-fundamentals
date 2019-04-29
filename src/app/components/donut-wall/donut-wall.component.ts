import { Component, Output, EventEmitter, Input } from '@angular/core';
import { Donut } from '../../models/donut.interface';

@Component({
  selector: 'app-donut-wall',
  templateUrl: './donut-wall.component.html',
  styleUrls: ['./donut-wall.component.css']
})
export class DonutWallComponent {
  /** The available donuts on the wall. */
  @Input() donuts: Donut[];

  /** Emit event when a donut is being edited. */
  @Output() edit = new EventEmitter<Donut>();

  /** Emit event when a donut is selected from the wall. */
  @Output() select = new EventEmitter<Donut>();
}
