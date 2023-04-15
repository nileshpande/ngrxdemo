import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { defaultStoreProvider } from '@state-adapt/angular';
import { App1SimpleStateComponent } from './1-simple-state.component';
import { App2DerivedStateComponent } from './2-derived-state.component';
import { App3StateChangesComponent } from './3-state-changes.component';
import { App4StateAdaptersComponent } from './4-state-adapters.component';
import { App5ObservableSourcesComponent } from './5-observable-sources.component';
import { App6DomSourcesComponent } from './6-dom-sources.component';
import { App7MultiStoreSelectorsComponent } from './7-multi-store-selectors.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [
    AppComponent,
    App1SimpleStateComponent,
    App2DerivedStateComponent,
    App3StateChangesComponent,
    App4StateAdaptersComponent,
    App5ObservableSourcesComponent,
    App6DomSourcesComponent,
    App7MultiStoreSelectorsComponent,
  ],
  bootstrap: [AppComponent],
  providers: [defaultStoreProvider],
})
export class AppModule {}
