import { TODO_INSERT, TODO_CHANGE_FILTER, TODO_COMPLETEALL } from "./action.js";

const INITIAL_STATE = {
  todos: [],
  currentFilter: "All",
};

const reducer = (state = INITIAL_STATE, action) => {
  if (!action) {
    return { ...state };
  }

  const { type, payload } = action;

  switch (type) {
    case TODO_INSERT:
      return {
        ...state,
        todos: state.todos.concat({ ...payload }),
      };
    case TODO_COMPLETEALL:
      return {
        ...state,
        todos: state.todos.map((todo) => {
          todo.completed = true;
          return todo;
        }),
      };
    case TODO_CHANGE_FILTER:
      return {
        ...state,
        currentFilter: payload.filter,
      };
  }
};

export { reducer };
