import { Component } from '@angular/core';
import { adapt } from '@state-adapt/angular';

@Component({
  selector: 'app-3-state-changes',
  template: `
  <h2>Hello {{ nameStore.yelledName$ | async }}!</h2>
  <p><button (click)="nameStore.set('Bilbo')">Change Name</button></p>
  <p><button (click)="nameStore.reverseName()">Reverse Name</button></p>
  `,
})
export class App3StateChangesComponent {
  nameStore = adapt(['name3', 'Bob'], {
    reverseName: (name) => name.split('').reverse().join(''),
    selectors: {
      yelledName: (name) => name.toUpperCase(), // Will be memoized
    },
  });
}
