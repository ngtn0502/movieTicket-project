import {
  GET_CINE_ROOM_SUCCESS,
  GET_CINE_ROOM_ERROR,
  GET_CINE_ROOM_LOADING,
} from '../actions/constantsAction';

const init = {
  cineRoomList: {},
};
export const cineRoomReducer = (state = init, action) => {
  if (action.type === GET_CINE_ROOM_SUCCESS) {
    return {
      ...state,
      cineRoomList: action.payload,
    };
  }
  return { ...state };
};
