import App from "./src/App.js";
import { store } from "./src/store/store.js";
import applyDiff from "./src/utils/applyDiff.js";

const config = {
  rootDom: "#root",
};

const app = App();

const render = () => {
  window.requestAnimationFrame(() => {
    const entry = document.body;
    const realDom = document.querySelector(config.rootDom);
    const virtualDom = app(realDom);

    applyDiff(entry, realDom, virtualDom);
  });
};

store.subscribe(render);
render();
