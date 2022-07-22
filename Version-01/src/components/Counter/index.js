const getTodoCount = (todos) => {
  const notCompletedTodos = todos.filter((todo) => !todo.completed);
  const length = notCompletedTodos.length;

  if (length === 1) {
    return "1 Item left";
  } else {
    return `${length} Items left`;
  }
};

export default (target, { todos }) => {
  const counter = target.cloneNode(true);
  counter.innerText = getTodoCount(todos);

  return counter;
};
