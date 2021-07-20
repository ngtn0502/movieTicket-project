import { GET_CINEMA_LIST } from '../actions/constantsAction';

const init = {
  cinemaList: [],
};
export const cinemaListReducer = (state = init, action) => {
  if (action.type === GET_CINEMA_LIST) {
    return {
      ...state,
      cinemaList: action.payload,
    };
  }
  return { ...state };
};
