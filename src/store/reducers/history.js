import { ADD_HISTORY, REMOVE_HISTORY } from '../actions/actionTypes';

const initialState = {
  history: [],
};

const reducer = (state = initialState, action) => {
  let payload = action.payload;
  let newHistory;
  switch (action.type) {
    case ADD_HISTORY:
      newHistory = [
        ...state.history,
        { id: Math.random() * 10000000, value: payload.value },
      ];
      return {
        ...state,
        history: newHistory,
      };
    case REMOVE_HISTORY:
      newHistory = state.history.filter((res) => res.id !== payload.id);
      return {
        ...state,
        history: newHistory,
      };

    default:
      return state;
  }
};

export default reducer;
