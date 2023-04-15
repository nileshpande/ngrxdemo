import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { addTodo, loadTodos, removeTodo } from '../ngrx/todo/todo.action';
import { Todo } from '../ngrx/todo/todo.models';
import { selectAllTodos } from '../ngrx/todo/todo.selectors';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.scss']
})
export class TodolistComponent implements OnInit {

  public allTodos$ = this.store.select(selectAllTodos);
  public todo = '';

  constructor(private store: Store<any>) {}

  ngOnInit(): void {
    this.store.dispatch(loadTodos());
  }

  
  removeTodo(todo: Todo) {
    this.store.dispatch(removeTodo({ id: todo.id }));
  }
}
