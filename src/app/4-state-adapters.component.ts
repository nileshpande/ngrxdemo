import { Component } from '@angular/core';
import { createAdapter } from '@state-adapt/core';
import { adapt } from '@state-adapt/angular';

@Component({
  selector: 'app-4-state-adapters',
  template: `
  <h2>Hello {{ name1Store.yelledName$ | async }}!</h2>
  <p><button (click)="name1Store.set('Bilbo')">Change Name</button></p>
  <p><button (click)="name1Store.reverseName()">Reverse Name</button></p>

  <h2>Hello {{ name2Store.yelledName$ | async }}!</h2>
  <p><button (click)="name2Store.set('Bilbo')">Change Name</button></p>
  <p><button (click)="name2Store.reverseName()">Reverse Name</button></p>
  `,
})
export class App4StateAdaptersComponent {
  nameAdapter = createAdapter<string>()({
    reverseName: (name) => name.split('').reverse().join(''),
    selectors: {
      yelledName: (name) => name.toUpperCase(), // Will be memoized
    },
  });

  name1Store = adapt(['name4.1', 'Bob'], this.nameAdapter);
  name2Store = adapt(['name4.2', 'Bob'], this.nameAdapter);
}
