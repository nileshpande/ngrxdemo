import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { addTodo, loadTodos, removeTodo } from '../ngrx/todo/todo.action';
import { Todo } from '../ngrx/todo/todo.models';
import { selectAllTodos } from '../ngrx/todo/todo.selectors';

@Component({
  selector: 'app-addtodo',
  templateUrl: './addtodo.component.html',
  styleUrls: ['./addtodo.component.scss']
})
export class AddtodoComponent implements OnInit {

  public allTodos$ = this.store.select(selectAllTodos);
  public todo = '';

  constructor(private store: Store<any>) {}

  ngOnInit() {
    
  }

  addTodo() {
    this.store.dispatch(addTodo({ content: this.todo }));
    this.todo = '';
  }


}
