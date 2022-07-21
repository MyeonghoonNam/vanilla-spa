const getTodoElement = (todo) => {
  const { text, completed } = todo;

  return `
    <li ${completed && 'class="completed"'}>
      <div class="view">
        <input 
          ${completed && "checked"}
          class="toggle" 
          type="checkbox">
        <label>${text}</label>
        <button class="destroy"></button>
      </div>

      <input class="edit" value="${text}">
    </li>
  `;
};

const getTodoCount = (todos) => {
  const notCompletedTodos = todos.filter((todo) => !todo.completed);
  const length = notCompletedTodos.length;

  if (length === 1) {
    return "1 Item left";
  } else {
    return `${length} Items left`;
  }
};

export default (target, state) => {
  const { todos, currentFilter } = state;

  const element = target.cloneNode(true);
  const list = element.querySelector(".todo-list");
  const counter = element.querySelector(".todo-count");
  const filters = element.querySelector(".filters");

  list.innerHTML = todos.map(getTodoElement).join("");
  counter.innerText = getTodoCount(todos);

  Array.from(filters.querySelectorAll("li a")).forEach((el) => {
    if (el.textContent === currentFilter) {
      el.classList.add("selected");
    } else {
      el.classList.remove("selected");
    }
  });

  return element;
};
