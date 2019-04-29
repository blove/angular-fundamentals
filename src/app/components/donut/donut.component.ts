import { Component, Input } from '@angular/core';
import { Donut } from '../../models/donut.interface';

@Component({
  selector: 'app-donut',
  templateUrl: './donut.component.html',
  styleUrls: ['./donut.component.css']
})
export class DonutComponent {
  @Input() donut: Donut;
}
