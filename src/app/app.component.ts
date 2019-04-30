import { Component } from '@angular/core';
import { DonutService } from './services/donut.service.js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['app.component.css']
})
export class AppComponent {
  // todo: remove
  constructor(donutService: DonutService) {
    donutService.populate();
  }
}
