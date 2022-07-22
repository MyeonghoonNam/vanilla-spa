import { Todos } from "./components/index.js";
import { Counter } from "./components/index.js";
import { Filters } from "./components/index.js";

export default (target, state) => {
  const element = target.cloneNode(true);
  const list = element.querySelector(".todo-list");
  const counter = element.querySelector(".todo-count");
  const filters = element.querySelector(".filters");

  list.replaceWith(Todos(list, state));
  counter.replaceWith(Counter(counter, state));
  filters.replaceWith(Filters(filters, state));

  return element;
};
