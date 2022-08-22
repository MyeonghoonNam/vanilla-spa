import { store } from "../../store/store.js";

const TodosController = () => {
  const FILTERS = ["All", "Active", "Completed"];

  const bindEvents = (target) => {};

  const render = (state) => {
    const $element = document.createElement("footer");
    $element.setAttribute("class", "footer");

    const { todos, currentFilter } = state;
    const isCompletedTodo = todos.some(({ completed }) => completed);
    const leftTodosCount = todos.filter(({ completed }) => !completed).length;

    $element.innerHTML = `
      <span class="todo-count">${leftTodosCount} Items left</span>

      <ul class="filters">
      ${FILTERS.map(
        (filter) => `
        <li data-filter=${filter}>
          <a ${filter === currentFilter ? "class='selected'" : ""}>${filter}</a>
        </li>
      `
      ).join("")}
      </ul>

      <button ${
        isCompletedTodo
          ? 'class="clear-completed"'
          : 'class="clear-completed hidden"'
      }>Clear completed</button>
      
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

export default TodosController;
