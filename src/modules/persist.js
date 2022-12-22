const Persist = class {
  // Function to get localStorage content
  static getLSContent() {
    let LSContent;
    if (localStorage.getItem('todos') === null) {
      LSContent = [];
    } else {
      LSContent = JSON.parse(localStorage.getItem('todos'));
    }
    return LSContent;
  }

  // Function to add todos to localStorage
  static addTodoToLS(element) {
    const Todos = Persist.getLSContent();
    Todos.push(element);
    localStorage.setItem('todos', JSON.stringify(Todos));
  }

  // Function to remove todos from local storage
  static removeTodoLS(id) {
    let LSContent = Persist.getLSContent();

    LSContent = LSContent.filter((todo) => todo.todoId !== id);
    LSContent.forEach((todo, i) => {
      todo.todoId = i + 1;
    });
    localStorage.setItem('todos', JSON.stringify(LSContent));
  }

  static updateTodoLS(id, text) {
    const LSContent = Persist.getLSContent();
    const itemToEdit = LSContent.filter((todo) => todo.todoId === id);
    itemToEdit[0].description = text;
    localStorage.setItem('todos', JSON.stringify(LSContent));
  }
};

export default Persist;