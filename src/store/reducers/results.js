import { ADD_RESULT, REMOVE_RESULT } from '../actionTypes';

const initialState = {
  results: [],
};

const reducer = (state = initialState, action) => {
  let payload = action.payload;
  let newResult;
  switch (action.type) {
    case ADD_RESULT:
      newResult = [
        ...state.results,
        { id: Math.random() * 10000000, value: payload.value },
      ];
      return {
        ...state,
        results: newResult,
      };
    case REMOVE_RESULT:
      newResult = state.results.filter((res) => res.id !== payload.id);
      return {
        ...state,
        results: newResult,
      };

    default:
      return state;
  }
};

export default reducer;
