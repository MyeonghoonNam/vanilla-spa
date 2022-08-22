import { store } from "../../store/store.js";
import { completeAllTodos, toggleTodo } from "../../store/action.js";
import getClosestElement from "../../utils/getClosestElement.js";

const Todos = () => {
  const bindEvents = (target) => {
    target.querySelector(".toggle-all").addEventListener("click", () => {
      store.dispatch(completeAllTodos());
    });

    target.querySelector(".todo-list").addEventListener("click", (e) => {
      const $liElement = getClosestElement(e.target, "li");
      const $elementClassName = e.target.className;
      const id = $liElement.dataset.id;

      if ($elementClassName === "toggle") {
        store.dispatch(toggleTodo(id));
      }
    });
  };

  const render = (state) => {
    const $element = document.createElement("section");
    $element.setAttribute("class", "main");

    const { todos, currentFilter } = state;
    const filterTodos = todos.filter((todo) => {
      if (currentFilter === "All") {
        return todo;
      } else if (currentFilter === "Active") {
        return !todo.completed;
      } else if (currentFilter === "Completed") {
        return todo.completed;
      }
    });

    $element.innerHTML = `
      <input id="toggle-all" class="toggle-all" type="checkbox" />
      <label for="toggle-all"> Mark all as complete </label>

      <ul class="todo-list">
      ${filterTodos
        .map(
          ({ id, text, completed }) => `
        <li ${completed ? "class='completed'" : ""} data-id=${id}>
          <div class="view">
            <input class="toggle" type="checkbox" ${
              completed ? "checked" : ""
            } />
            <label>${text}</label>
            <button class="destroy"></button>
          </div>

          <input class="edit" />
        </li>
      `
        )
        .join("")}
      </ul>
    `;

    return $element;
  };

  return () => {
    const state = store.getState();
    const $element = render(state);

    bindEvents($element);

    return $element;
  };
};

export default Todos;
