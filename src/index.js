import {
  Todo, todoForm, todoList,
} from './modules/todo.js';
import Views from './modules/views.js';
import Persist from './modules/persist.js';
import '@fortawesome/fontawesome-free/js/all.js';
import './css/style.css';
import './scss/main.scss';

// EVENT LISTENERS
// On Document load
document.addEventListener('DOMContentLoaded', Views.displayTodos);

// To add a new todo
todoForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const description = document.querySelector('.add-todo').value;

  const todo = new Todo(description);
  Views.addTodo(todo);
  Views.clearInputField();
  Persist.addTodoToLS(todo);
});
