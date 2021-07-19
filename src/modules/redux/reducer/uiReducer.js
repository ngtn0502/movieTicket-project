import { SHOW_MODAL, CLOSE_MODAL } from '../actions/constantsAction';

const init = {
  isModalShow: false,
  trailer: 'https://www.youtube.com/embed/6ZfuNTqbHE8',
};

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
  return { ...state };
};
