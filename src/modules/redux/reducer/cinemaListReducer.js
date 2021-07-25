import { GET_CINEMA_LIST } from '../actions/constantsAction';

const init = {
  cinemaList: [],
};
// Handle fetch api get danh sách hệ thống các rap chiếu phim
export const cinemaListReducer = (state = init, action) => {
  if (action.type === GET_CINEMA_LIST) {
    return {
      ...state,
      cinemaList: action.payload,
    };
  }
  return { ...state };
};
