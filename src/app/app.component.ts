import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1>{{ name }}</h1>
    <p>Age: {{ age - 10 }} 😉</p>
    <p>Follow me: {{ twitter }}</p>
    <p>
      Enjoys knitting?
      {{ likesKnitting ? 'sweeeet' : 'you're missing out' }}
    </p>
  `
})
export class AppComponent {
  name = 'Brian Love';
  age = 40;
  twitter = '@brian_love';
  likesKnitting: boolean;

  // add your favorite food

  // add your favorite place to go on vacation

  // add the name of your best friend
}
