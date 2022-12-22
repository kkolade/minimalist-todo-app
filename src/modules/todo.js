const todoList = document.querySelector('.todo-list');
const todoForm = document.querySelector('.todo-form');

// The Book Class

const Todo = class {
static getNextID = () => {
  let nextID;
  if (localStorage.getItem('todos') === null) {
    nextID = 0;
  } else {
    nextID = JSON.parse(localStorage.getItem('todos')).length;
  }
  return nextID + 1;
}

constructor(_description) {
  this.description = _description;
  this.completed = false;
  this.todoId = Todo.getNextID();
}
};

export default Todo;
export {
  todoList, todoForm, Todo,
};