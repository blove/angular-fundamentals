import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1>{{ name }}</h1>
    <p>Age: {{ age - 10 }} 😉</p>
    <p>Follow me: {{ twitter }}</p>
  `
})
export class AppComponent {
  name = 'Brian Love';
  age = 40;
  twitter = '@brian_love';

  // 1. add your favorite food

  // 2. add your favorite place to go on vacation

  // 3. add the name of your best friend
}
