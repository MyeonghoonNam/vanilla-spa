import App from "./src/App.js";
import applyDiff from "./src/utils/applyDiff.js";

window.requestAnimationFrame(() => {
  const main = document.querySelector("#root");
  const new_main = new App(main).render();

  applyDiff(document.body, main, new_main);
});
