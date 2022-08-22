import { store } from "../../store/store.js";
import { changeFilter } from "../../store/action.js";
import getClosestElement from "../../utils/getClosestElement.js";

const TodosController = () => {
  const FILTERS = ["All", "Active", "Completed"];

  const bindEvents = (target) => {
    target.querySelector(".filters").addEventListener("click", (e) => {
      e.preventDefault();

      if (e.target.tagName === "UL") return;

      const $element = getClosestElement(e.target, "li");
      store.dispatch(changeFilter($element.dataset.filter));
    });
  };

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
