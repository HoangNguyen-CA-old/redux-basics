import {
  INCREMENT,
  DECREMENT,
  ADD_HISTORY,
  REMOVE_HISTORY,
} from './actionTypes';

export const increment = () => {
  return {
    type: INCREMENT,
  };
};

export const decrement = () => {
  return {
    type: DECREMENT,
  };
};

export const addHistory = (value) => {
  return { type: ADD_HISTORY, payload: { value } };
};

export const removeHistory = (id) => {
  return { type: REMOVE_HISTORY, payload: { id } };
};
