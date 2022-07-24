import { Todos } from "./components/index.js";
import { Counter } from "./components/index.js";
import { Filters } from "./components/index.js";
import getTodos from "./utils/getTodos.js";

export default class App {
  constructor(target) {
    this.target = target;
    this.components = {};

    this.setUp();
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

  renderWrapper(component) {
    return (target, state) => {
      const element = component(target, state);
      const components = element.querySelectorAll("[data-component]");

      Array.from(components).forEach((target) => {
        const name = target.dataset.component;
        const render = this.components[name];

        if (!component) return;

        target.replaceWith(render(target, state));
      });

      return element;
    };
  }

  render(root = this.target, state = this.state) {
    const component = (root) => {
      return root.cloneNode(true);
    };

    return this.renderWrapper(component)(root, state);
  }
}
