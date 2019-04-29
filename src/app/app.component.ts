import { Component } from '@angular/core';
import data from './data/donuts.json';
import { environment } from '../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['app.component.css']
})
export class AppComponent {
  constructor() {
    const value = window.localStorage.getItem(environment.storage.donuts);
    if (!value) {
      window.localStorage.setItem(
        environment.storage.donuts,
        JSON.stringify(data)
      );
    }
  }
}
