import {
  GET_CINE_ROOM_SUCCESS,
  GET_CINE_ROOM_LOADING,
  CHOOSING_SEAT,
  RESET__AMOUNT,
} from '../../actions/constantsAction.js';

const init = {
  isLoading: false,
  cineRoomMovie: {},
  cineSeatList: [],
  totalAmount: 0,
};

export const bookingReducer = (state = init, action) => {
  // check if it loading
  if (action.type === GET_CINE_ROOM_LOADING) {
    return {
      ...state,
      isLoading: true,
    };
  }
  // Handle fetch API get danh sách phòng chiếu của từng bộ phim tương ứng

  if (action.type === GET_CINE_ROOM_SUCCESS) {
    return {
      ...state,
      isLoading: false,
      cineRoomMovie: action.payload.thongTinPhim,
      cineSeatList: action.payload.danhSachGhe,
    };
  }
  // Handle những seat đang chọn

  if (action.type === CHOOSING_SEAT) {
    const oldSeat = [...state.cineSeatList];
    const seat = { ...action.payload };
    const index = oldSeat.findIndex((item) => item.maGhe === seat.maGhe);
    const updateSeat = { ...oldSeat[index] };
    if (updateSeat.dangChon) {
      state.totalAmount -= updateSeat.giaVe;
    } else {
      state.totalAmount += updateSeat.giaVe;
    }
    updateSeat.dangChon = !updateSeat.dangChon;
    oldSeat[index] = updateSeat;
    return {
      ...state,
      cineSeatList: [...oldSeat],
    };
  }
  if (action.type === RESET__AMOUNT) {
    return {
      ...state,
      totalAmount: 0,
    };
  }

  return { ...state };
};
