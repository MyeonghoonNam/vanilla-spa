export const TODO_INSERT = "TODO_INSERT";
export const TODO_CHANGE_FILTER = "TODO_CHANGE_FILTER";

export const insertTodo = (id, text) => ({
  type: TODO_INSERT,
  payload: {
    id,
    text,
    completed: false,
  },
});

export const changeFilter = (filter) => ({
  type: TODO_CHANGE_FILTER,
  payload: { filter },
});
