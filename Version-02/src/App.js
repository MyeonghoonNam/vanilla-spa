import { Header, Todos, TodosController, Footer } from "./components/index.js";

const App = () => {
  const COMPONENTS = {
    Header: Header(),
    Todos: Todos(),
    TodosController: TodosController(),
    Footer: Footer(),
  };

  const render = (target) => {
    const $container = target.cloneNode();

    const $header = COMPONENTS["Header"]();
    const $todos = COMPONENTS["Todos"]();
    const $todosController = COMPONENTS["TodosController"]();
    const $footer = COMPONENTS["Footer"]();

    const $element = document.createElement("section");
    $element.setAttribute("class", "todoapp");

    $element.appendChild($header);
    $element.appendChild($todos);
    $element.appendChild($todosController);

    $container.appendChild($element);
    $container.appendChild($footer);

    return $container;
  };

  return (target) => {
    const $element = render(target);
    return $element;
  };
};

export default App;
