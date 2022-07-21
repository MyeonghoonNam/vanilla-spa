import App from "./src/App.js";
import getTodos from "./src/utils/getTodos.js";

const main = document.querySelector(".todoapp");

const state = {
  todos: getTodos(),
  currentFilter: "All",
};

window.requestAnimationFrame(() => {
  const new_main = App(main, state);
  main.replaceWith(new_main);
});
