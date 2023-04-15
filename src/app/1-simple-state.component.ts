import { Component } from '@angular/core';
import { adapt } from '@state-adapt/angular';

@Component({
  selector: 'app-1-simple-state',
  template: `
  <h2>Hello {{nameStore.state$ | async}}!</h2>
  <button (click)="nameStore.set('Bilbo')">Change Name</button>
  `,
})
export class App1SimpleStateComponent {
  nameStore = adapt('name1', 'Bob');
}
