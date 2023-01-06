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
