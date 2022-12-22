import Persist from './persist.js';

const Interactivity = class {
// DOM Actions
  static markAsCompleteTodoDOM(item) {
    if (item.checked) {
      item.nextElementSibling.classList.add('done');
    } else if (!item.checked) {
      item.nextElementSibling.classList.remove('done');
    }
  }

  // // localStorage Actions
  static markAsCompleteTodoLS(id) {
    const LSContent = Persist.getLSContent();
    const doneItem = LSContent.filter((todo) => todo.todoId === id);
    doneItem[0].completed = true;
    localStorage.setItem('todos', JSON.stringify(LSContent));
  }

  static clearCompleted() {
    let LSContent = Persist.getLSContent();
    LSContent = LSContent.filter((todo) => !todo.completed);
    localStorage.setItem('todos', JSON.stringify(LSContent));
  }
};

export default Interactivity;