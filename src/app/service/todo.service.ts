import { Injectable } from '@angular/core'; 
import { Todo } from '../ngrx/todo/todo.models';

@Injectable({ providedIn: 'root' })
export class TodoService {
  private storageInitialised = false;
 
  constructor() {}

  async getTodos(): Promise<Todo[]> { 
    
    if (localStorage.getItem("todos") === null) {
      return [];
    }
    else 
    {
      let tempvar:any = [];
      tempvar = localStorage.getItem('todos');
      return (await JSON.parse(tempvar)) || [];
    }
     
  }

  async saveTodos(todos: Todo[]) { 
    localStorage.setItem('todos', JSON.stringify(todos)); 
    let tempvar:any = [];
    tempvar = localStorage.getItem('todos');
    return (await JSON.parse(tempvar)) || [];
  }

  destroyTodos()
  {
    localStorage.removeItem('todos');
    return [];
  }
}