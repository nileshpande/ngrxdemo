import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
    <a href="https://state-adapt.github.io/" target="_blank" rel="noreferrer"> 
      <img src="https://upload.wikimedia.org/wikipedia/commons/c/cf/Angular_full_color_logo.svg" class="logo angular" alt="Angular Logo" />
    </a>

    <a href="https://state-adapt.github.io/" target="_blank" rel="noreferrer"> 
      <img src="https://state-adapt.github.io/assets/sa3-3.svg" class="logo stateadapt" alt="StateAdapt Logo" />
    </a>

    <h1 style="margin-top:1em">Angular + StateAdapt</h1>

    <p>Click "Open in New Tab" to let Redux Devtools track state</p>
    
    <h1 (click)="demo1 = !demo1">1. Simple State</h1>
    <app-1-simple-state *ngIf="demo1" />

    <h1 (click)="demo2 = !demo2">2. Derived State</h1>
    <app-2-derived-state *ngIf="demo2" />

    <h1 (click)="demo3 = !demo3">3. State Changes</h1>
    <app-3-state-changes *ngIf="demo3" />

    <h1 (click)="demo4 = !demo4">4. State Adapters</h1>
    <app-4-state-adapters *ngIf="demo4" />

    <h1 (click)="demo5 = !demo5">5. Observable Sources</h1>
    <app-5-state-adapters *ngIf="demo5" />
    
    <h1 (click)="demo6 = !demo6">6. DOM Sources</h1>
    <app-6-dom-sources *ngIf="demo6" />
    
    <h1 (click)="demo7 = !demo7">7. Multi-Store Selectors</h1>
    <app-7-multi-store-selectors *ngIf="demo7" />
  `,
})
export class AppComponent {
  // StackBlitz refresh causes stores to be created before destroyed
  demo1 = false;
  demo2 = false;
  demo3 = false;
  demo4 = false;
  demo5 = false;
  demo6 = false;
  demo7 = false;
}
