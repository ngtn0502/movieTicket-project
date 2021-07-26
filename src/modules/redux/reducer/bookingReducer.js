import {
  GET_CINE_ROOM_SUCCESS,
  GET_CINE_ROOM_ERROR,
  GET_CINE_ROOM_LOADING,
  CHOOSING_SEAT,
} from '../actions/constantsAction';

const init = {
  cineRoomMovie: {},
  cineSeatList: [],
  totalAmount: 0,
};

export const bookingReducer = (state = init, action) => {
  // Handle fetch API get danh sách phòng chiếu của từng bộ phim tương ứng

  if (action.type === GET_CINE_ROOM_SUCCESS) {
    return {
      ...state,
      cineRoomMovie: action.payload.thongTinPhim,
      cineSeatList: action.payload.danhSachGhe,
    };
  }
  // Handle những seat đang chọn

  if (action.type === CHOOSING_SEAT) {
    const oldSeat = [...state.cineSeatList];
    const seat = { ...action.payload };
    const index = oldSeat.findIndex((item) => item.maGhe === seat.maGhe);
    console.log(state.cineSeatList);

    // if (index === -1) {
    //   seat.dangChon = true;
    //   return {
    //     ...state,
    //     cineSeatList: [...state.cineSeatList, seat],
    //   };
    // }

    const updateSeat = { ...oldSeat[index] };
    // console.log('asdasd', oldSeat[index]);
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
  return { ...state };
};
