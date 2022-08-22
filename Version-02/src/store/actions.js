export const TODO_INSERT = "TODO_INSERT";

export const insertTodo = (id, text) => ({
  type: TODO_INSERT,
  payload: {
    id,
    text,
    completed: false,
  },
});
