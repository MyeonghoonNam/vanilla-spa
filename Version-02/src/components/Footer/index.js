const Footer = () => {
  const render = () => {
    const $element = document.createElement("footer");
    $element.setAttribute("class", "info");
    $element.innerHTML = `
      <p>Double-click to edit a todo</p>
      <p>
        Created by
        <a href="http://twitter.com/thestrazz86">Francesco Strazzullo</a>
      </p>
      <p>
        Thanks to <a href="http://todomvc.com">TodoMVC</a>
      </p>
    `;

    return $element;
  };

  return () => {
    const $element = render();
    return $element;
  };
};

export default Footer;
