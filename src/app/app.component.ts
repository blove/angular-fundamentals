import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1>{{ name }}</h1>
    <p>Follow me: {{ twitter }}</p>
  `
})
export class AppComponent {
  name = 'Brian Love';
  twitter = '@brian_love';
}
