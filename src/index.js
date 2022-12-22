import {
  Todo, todoForm, todoList, clearCompleteTodo,
} from './modules/todo.js';
import Views from './modules/views.js';
import Persist from './modules/persist.js';
// eslint-disable-next-line import/no-unresolved
import Interactivity from './modules/interactivity.js';
// eslint-disable-next-line import/no-unresolved
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

// To remove a todo
todoList.addEventListener('click', (e) => {
  e.stopPropagation();

  if (e.target.parentElement.classList.contains('fa-trash')) {
    Views.removeTodoDOM(e.target);

    const idItemToRemove = Number(e.target.parentElement.parentElement.id);

    Persist.removeTodoLS(idItemToRemove);
    Views.refreshDOM();
  }
});

// To edit todo
todoList.addEventListener('change', (e) => {
  if (e.target.classList.contains('description')) {
    const idItemToEdit = Number(e.target.parentElement.id);
    Persist.updateTodoLS(idItemToEdit, e.target.value);
    Views.refreshDOM();
  }
});

todoList.addEventListener('change', (e) => {
  if (e.target.checked) {
    const completedItemId = Number(e.target.parentElement.id);
    Interactivity.markAsCompleteTodoDOM(e.target);
    Interactivity.markAsCompleteTodoLS(completedItemId);
  }
});

clearCompleteTodo.addEventListener('click', (e) => {
  e.preventDefault();
  Interactivity.clearCompleted();
  Views.refreshDOM();
});
