import { reducer } from "./reducer.js";
import cloneDeepObject from "../utils/cloneDeepObject.js";

const createStore = () => {
  const listeners = [];
  let state = reducer();

  const subscribe = (listener) => {
    listener.push(listener);
  };

  const publish = () => {
    listeners.forEach((listener) => listener(state));
  };

  const dispatch = (action) => {
    const newState = reducer(state, action);
    state = newState;

    publish();
  };

  const getState = () => {
    return freeze(state);
  };

  return {
    subscribe,
    dispatch,
    getState,
  };
};

const freeze = (state) => Object.freeze(cloneDeepObject(state));

export const store = createStore(reducer);
