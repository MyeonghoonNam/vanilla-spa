import { store } from "../../store/store.js";
import { insertTodo } from "../../store/actions.js";
import getUniqueId from "../../utils/getUniqueId.js";

const Header = () => {
  const bindEvents = (target) => {
    target.querySelector(".new-todo").addEventListener("keypress", (e) => {
      if (e.key === "Enter") {
        store.dispatch(insertTodo(getUniqueId(), e.target.value));
        e.target.value = "";
      }
    });
  };

  const render = () => {
    const $element = document.createElement("header");
    $element.setAttribute("class", "header");
    $element.innerHTML = `
      <h1>todos</h1>
      <input
        class="new-todo"
        placeholder="What needs to be done?"
      />
    `;

    return $element;
  };

  return () => {
    const $element = render();
    bindEvents($element);

    return $element;
  };
};

export default Header;
