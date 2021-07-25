import { CHOOSING_SEAT } from '../actions/constantsAction';

const init = {
  seat: [],
};
// Handle những seat đang chọn
export const choosingSeatReducer = (state = init, action) => {
  if (action.type === CHOOSING_SEAT) {
    const oldSeat = [...state.seat];
    const seat = { ...action.payload };
    console.log(seat);
    const index = oldSeat.findIndex((item) => item.maGhe === seat.maGhe);
    console.log(index);
    if (index === -1) {
      seat.dangChon = true;
      return {
        ...state,
        seat: [...state.seat, seat],
      };
    }
    const updateSeat = { ...oldSeat[index] };
    // console.log('asdasd', oldSeat[index]);
    updateSeat.dangChon = !updateSeat.dangChon;
    oldSeat[index] = updateSeat;
    return {
      ...state,
      seat: [...oldSeat],
    };
  }
  return { ...state };
};
