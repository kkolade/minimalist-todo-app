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
