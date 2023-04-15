import { Component } from '@angular/core';
import { adapt } from '@state-adapt/angular';

@Component({
  selector: 'app-2-derived-state',
  template: `
  <h2>Hello {{ nameStore.state$ | async }}!</h2>
  <h2>Hello {{ nameStore.yelledName$ | async }}!</h2>
  <button (click)="nameStore.set('Bilbo')">Change Name</button>
  `,
})
export class App2DerivedStateComponent {
  nameStore = adapt(['name2', 'Bob'], {
    selectors: {
      yelledName: (name) => name.toUpperCase(), // Will be memoized
    },
  });
}
