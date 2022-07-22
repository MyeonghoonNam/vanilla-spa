import App from "./src/App.js";

window.requestAnimationFrame(() => {
  const main = document.querySelector(".todoapp");
  const new_main = new App(main).render();

  main.replaceWith(new_main);
});
