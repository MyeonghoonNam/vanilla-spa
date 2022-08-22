import { store } from "../../store/store.js";

const Todos = () => {
  const bindEvents = (target) => {};

  const render = (state) => {
    const $element = document.createElement("section");
    $element.setAttribute("class", "main");

    const { todos } = state;

    $element.innerHTML = `
      <input id="toggle-all" class="toggle-all" type="checkbox" />
      <label for="toggle-all"> Mark all as complete </label>

      <ul class="todo-list">
      ${todos
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
