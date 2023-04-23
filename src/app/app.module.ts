import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddtodoComponent } from './addtodo/addtodo.component';
import { TodolistComponent } from './todolist/todolist.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; 
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from 'src/environments/environment';
import { TodoEffects } from './ngrx/todo/todo.effects';
import { todoReducer } from './ngrx/todo/todo.reducers';
import { StepsModule } from 'primeng/steps';
import { ButtonModule } from 'primeng/button';
import { MatStepperModule } from '@angular/material/stepper';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';



@NgModule({
  declarations: [
    AppComponent,
    AddtodoComponent,
    TodolistComponent
  ],
  imports: [
    MatStepperModule,
    BrowserAnimationsModule,
    MatIconModule,
    FormsModule, ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    ButtonModule,
    StepsModule,
    FormsModule, 
    StoreModule.forRoot({ todos: todoReducer }),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
    }),
    EffectsModule.forRoot([TodoEffects]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
