import Persist from '../src/modules/persist.js';
import Interactivity from '../src/modules/interactivity.js';
import 'jest-localstorage-mock';

describe('edit_update_clear_todo', () => {
  test('updates or edit a todo in local storage', () => {
    const todoId = '10';
    const todoText = 'my todo';
    const LSContent = [
      {
        todoId: '10',
        description: 'Walk the Dog',
        completed: false,
      },
      {
        todoId: '11',
        description: 'Clean the room',
        completed: false,
      },
    ];
    localStorage.setItem('todos', JSON.stringify(LSContent));

    Persist.updateTodoLS(todoId, todoText);

    const updatedLSContent = JSON.parse(localStorage.getItem('todos'));
    expect(updatedLSContent[0].description).toBe(todoText);
  });
});

describe("markAsCompleteTodoLS", () => {
  beforeEach(() => {
    // Clear local storage before each test
    localStorage.clear();
  });

  test("clearCompleted removes completed todos from local storage", () => {
    // Arrange
    const todo1 = { text: "todo 1", completed: true };
    const todo2 = { text: "todo 2", completed: false };
    const todo3 = { text: "todo 3", completed: true };
    localStorage.setItem("todos", JSON.stringify([todo1, todo2, todo3]));

    Interactivity.clearCompleted();

    const expected = [todo2];
    const actual = Persist.getLSContent();
    expect(actual).toEqual(expected);
  });

  test("marks a todo as completed in local storage", () => {
    const todoId = "1";
    const todo = { todoId: "1", description: "Test todo", completed: false };
    localStorage.setItem("todos", JSON.stringify([todo]));

    Interactivity.markAsCompleteTodoLS(todoId);

    const updatedTodos = JSON.parse(localStorage.getItem("todos"));

    expect(updatedTodos[0].completed).toBe(true);
  });
});