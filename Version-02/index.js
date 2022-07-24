import App from "./src/App.js";
import applyDiff from "./src/utils/applyDiff.js";

window.setInterval(() => {
  window.requestAnimationFrame(() => {
    const main = document.querySelector(".todoapp");
    const new_main = new App(main).render();

    applyDiff(document.body, main, new_main);
  });
}, 1000);
