import { Component } from '@angular/core';
import { createAdapter } from '@state-adapt/core';
import { toSource } from '@state-adapt/rxjs';
import { adapt } from '@state-adapt/angular';
import { mapTo, timer, interval, map, take } from 'rxjs';

@Component({
  selector: 'app-5-state-adapters',
  template: `
  (Time remaining: {{ timeLeft$ | async }})
  <h2>Hello {{ name1Store.yelledName$ | async }}!</h2>
  <p><button (click)="name1Store.set('Bilbo')">Change Name</button></p>
  <p><button (click)="name1Store.reverseName()">Reverse Name</button></p>

  <h2>Hello {{ name2Store.yelledName$ | async }}!</h2>
  <p><button (click)="name2Store.set('Bilbo')">Change Name</button></p>
  <p><button (click)="name2Store.reverseName()">Reverse Name</button></p>
  `,
})
export class App5ObservableSourcesComponent {
  nameAdapter = createAdapter<string>()({
    reverseName: (name) => name.split('').reverse().join(''),
    concatName: (name, anotherName: string) => `${name} ${anotherName}`,
    selectors: {
      yelledName: (name) => name.toUpperCase(), // Will be memoized
    },
  });

  timeLeft$ = interval(100).pipe(
    map((i) => (9 - i) / 10),
    take(10)
  );

  nameFromServer$ = timer(1000).pipe(
    mapTo('Joel'),
    toSource('[name] nameFromServer$') // Annotate for Redux Devtools
  );

  name1Store = adapt(
    ['name5.1', 'Bob', this.nameAdapter],
    this.nameFromServer$
  ); //Set state
  name2Store = adapt(['name5.2', 'Bob', this.nameAdapter], {
    concatName: this.nameFromServer$, // Trigger a specific state reaction
  });
}
