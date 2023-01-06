import Persist from "../src/modules/persist.js";
import "jest-localstorage-mock";

describe("Add_Remove_Todos", () => {
  describe("addTodoToLS", () => {
    beforeEach(() => {
      localStorage.clear();
    });

    test("adds a new todo to local storage", () => {
      const element = { id: 1, text: "Visit with Grandma" };
      Persist.addTodoToLS(element);
      const todos = Persist.getLSContent();
      expect(todos[0]).toEqual(element);
    });
  });
});

test("removeTodoLS removes a todo from local storage", () => {
  const todo1 = { todoId: 1, text: "Finish writing tests" };
  const todo2 = { todoId: 2, text: "Submit project" };
  const todos = [todo1, todo2];
  localStorage.setItem("todos", JSON.stringify(todos));
   Persist.removeTodoLS(1);

  const updatedTodos = JSON.parse(localStorage.getItem("todos"));

  expect(updatedTodos).toEqual([{ todoId: 1, text: "Submit project" }]);
});

