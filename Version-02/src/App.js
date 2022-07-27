import { Todos } from "./components/index.js";
import { Counter } from "./components/index.js";
import { Filters } from "./components/index.js";
import getTodos from "./utils/getTodos.js";

export default class App {
  constructor(target) {
    this.target = target;
    this.state = {};
    this.components = {};
    this.events = {};

    this.setUp();
    this.template();
    this.bindEvents();
  }

  setUp() {
    this.state = {
      todos: getTodos(),
      currentFilter: "All",
    };

    this.components["todos"] = this.renderWrapper(Todos);
    this.components["counter"] = this.renderWrapper(Counter);
    this.components["filters"] = this.renderWrapper(Filters);
  }

  bindEvents() {}

  renderWrapper(component) {
    return (target, state) => {
      const element = component(target, state);
      const components = element.querySelectorAll("[data-component]");

      Array.from(components).forEach((target) => {
        const name = target.dataset.component;
        const component = this.components[name];

        if (!component) return;

        target.replaceWith(component(target, state));
      });

      return element;
    };
  }

  render() {
    const component = () => {
      return this.target.cloneNode(true);
    };

    return this.renderWrapper(component)(this.target, this.state);
  }

  template() {
    this.target.innerHTML = `
      <section class="todoapp">
        <header class="header">
          <h1>todos</h1>
          <input
            class="new-todo"
            placeholder="What needs to be done?"
            autofocus
          />
        </header>

        <section class="main">
          <input id="toggle-all" class="toggle-all" type="checkbox" />
          <label for="toggle-all"> Mark all as complete </label>
          <ul class="todo-list" data-component="todos"></ul>
        </section>

        <footer class="footer">
          <span class="todo-count" data-component="counter"> 1 Item Left </span>
          <ul class="filters" data-component="filters">
            <li>
              <a href="#/">All</a>
            </li>
            <li>
              <a href="#/active">Active</a>
            </li>
            <li>
              <a href="#/completed">Completed</a>
            </li>
          </ul>
          <button class="clear-completed">Clear completed</button>
        </footer>
      </section>
      
      <footer class="info">
        <p>Double-click to edit a todo</p>
        <p>
          Created by
          <a href="http://twitter.com/thestrazz86">Francesco Strazzullo</a>
        </p>
        <p>Thanks to <a href="http://todomvc.com">TodoMVC</a></p>
      </footer>
    `;
  }
}
