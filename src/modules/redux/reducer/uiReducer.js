import {
  SHOW_MODAL,
  CLOSE_MODAL,
  USER_LOGIN_FAIL,
  USER_SIGN_UP_FAIL,
  USER_BOOKING_SUCCESS,
  USER_BOOKING_FAIL,
  REQUIRE__CHOOSINGSEAT,
  USER_BOOKING_WARNING,
  USER_LOGOUT_ALERT,
} from '../actions/constantsAction';

const init = {
  isTrailerShow: false,
  trailer: 'https://www.youtube.com/embed/6ZfuNTqbHE8',
  modal: {
    isModalShow: false,
    type: null,
    message: 'Đăng nhập',
    message2: null,
    goTo: null,
  },
};
// Handle UI change in page
export const uiReducer = (state = init, action) => {
  if (action.type === SHOW_MODAL) {
    return {
      ...state,
      trailer: action.payload,
      isTrailerShow: true,
    };
  }
  if (action.type === CLOSE_MODAL) {
    return {
      ...state,
      isTrailerShow: false,
      modal: {
        isModalShow: false,
      },
    };
  }
  if (action.type === USER_LOGIN_FAIL) {
    return {
      ...state,
      modal: {
        ...state.modal,
        isModalShow: true,
        type: action.payload.type,
        message: action.payload.message,
        message2: action.payload.message2,
      },
    };
  }
  if (action.type === USER_LOGOUT_ALERT) {
    return {
      ...state,
      modal: {
        ...state.modal,
        isModalShow: true,
        type: action.payload.type,
        message: action.payload.message,
        message2: action.payload.message2,
      },
    };
  }
  if (action.type === USER_SIGN_UP_FAIL) {
    return {
      ...state,
      modal: {
        ...state.modal,
        isModalShow: true,
        type: action.payload.type,
        message: action.payload.message,
        message2: action.payload.message2,
      },
    };
  }
  if (action.type === USER_BOOKING_SUCCESS) {
    return {
      ...state,
      modal: {
        ...state.modal,
        isModalShow: true,
        type: action.payload.type,
        message: action.payload.message,
        message2: action.payload.message2,
        goTo: action.payload.goTo,
      },
    };
  }
  if (action.type === USER_BOOKING_WARNING) {
    return {
      ...state,
      modal: {
        ...state.modal,
        isModalShow: true,
        type: action.payload.type,
        message: action.payload.message,
        message2: action.payload.message2,
      },
    };
  }
  if (action.type === USER_BOOKING_FAIL) {
    return {
      ...state,
      modal: {
        ...state.modal,
        isModalShow: true,
        type: action.payload.type,
        message: action.payload.message,
        message2: action.payload.message2,
      },
    };
  }
  if (action.type === REQUIRE__CHOOSINGSEAT) {
    return {
      ...state,
      modal: {
        ...state.modal,
        isModalShow: true,
        type: action.payload.type,
        message: action.payload.message,
        message2: action.payload.message2,
        goTo: action.payload.goTo,
      },
    };
  }
  return { ...state };
};
