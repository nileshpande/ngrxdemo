import { TodoState } from './todo/todo.reducers';

export interface AppState {
  todos: TodoState;
}