import Persist from './persist.js';
import { todoList } from './todo.js';

const Views = class {
  // Function to create a new todo from the Todo class and content of the form
  static addTodo(todo) {
    // Create elements required for individual todo
    const todoItem = document.createElement('li');
    const isCompleted = document.createElement('input');
    const description = document.createElement('input');
    const deleteIcon = document.createElement('i');

    // Assigning class, attributes and text content to the elements
    todoItem.classList.add('todo-item');
    isCompleted.setAttribute('type', 'checkbox');
    isCompleted.className = 'is-completed';
    description.setAttribute('type', 'text');
    description.className = 'description';
    description.value = todo.description;
    deleteIcon.className = 'fa-solid fa-trash';
    todoItem.setAttribute('id', `${todo.todoId}`);

    // Build a todo and attach it to the DOM
    todoItem.append(isCompleted, description, deleteIcon);
    todoList.appendChild(todoItem);
  }

  static displayTodos() {
    const todos = Persist.getLSContent();
    todos.forEach((todo) => Views.addTodo(todo));
  }

  static clearInputField() {
    const addTodoItem = document.querySelector('.add-todo');
    addTodoItem.value = '';
  }

  static removeTodoDOM(item) {
    if (item.parentElement.classList.contains('fa-trash')) {
      item.parentElement.parentElement.remove();
    }
  }

  static refreshDOM() {
    window.location.reload();
    return false;
  }
};

export default Views;