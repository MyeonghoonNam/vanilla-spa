import { TODO_INSERT } from "./actions.js";

const INITIAL_STATE = {
  todos: [],
  currentFilter: "All",
};

const reducer = (state, action) => {
  if (!action) {
    return INITIAL_STATE;
  }

  switch (action.type) {
    case TODO_INSERT:
      const newTodo = { ...action.payload };

      return {
        ...state,
        todos: state.todos.concat(newTodo),
      };
  }
};

export default reducer;
