import {
  SHOW_MODAL,
  CLOSE_MODAL,
  USER_LOGIN_FAIL,
  USER_SIGN_UP_FAIL,
  USER_BOOKING_SUCCESS,
  USER_BOOKING_FAIL,
  REQUIRE__CHOOSINGSEAT,
} from '../actions/constantsAction';

const init = {
  isModalShow: false,
  trailer: 'https://www.youtube.com/embed/6ZfuNTqbHE8',
  message: 'Đăng nhập',
  goTo: null,
};
// Handle UI change in page
export const uiReducer = (state = init, action) => {
  if (action.type === SHOW_MODAL) {
    return {
      ...state,
      trailer: action.payload,
      isModalShow: true,
    };
  }
  if (action.type === CLOSE_MODAL) {
    return {
      ...state,
      isModalShow: false,
    };
  }
  if (action.type === USER_LOGIN_FAIL) {
    return {
      ...state,
      message: action.payload,
      isModalShow: true,
    };
  }
  if (action.type === USER_SIGN_UP_FAIL) {
    return {
      ...state,
      message: action.payload,
      isModalShow: true,
    };
  }
  if (action.type === USER_BOOKING_SUCCESS) {
    return {
      ...state,
      message: action.payload,
      isModalShow: true,
    };
  }
  if (action.type === USER_BOOKING_FAIL) {
    return {
      ...state,
      message: action.payload,
      isModalShow: true,
    };
  }
  if (action.type === REQUIRE__CHOOSINGSEAT) {
    return {
      ...state,
      message: action.payload,
      isModalShow: true,
    };
  }
  return { ...state };
};
