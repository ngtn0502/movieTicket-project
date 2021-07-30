import { USER_LOGOUT, USER_LOGIN } from '../actions/constantsAction.js';

const init = {
  isLoginSuccess: false,
  loginData: null,
};
export const authReducer = (state = init, action) => {
  if (action.type === USER_LOGIN) {
    return {
      ...state,
      isLoginSuccess: true,
      loginData: action.payload,
    };
  }
  if (action.type === USER_LOGOUT) {
    //
    return {
      ...state,
      isLoginSuccess: false,
    };
  }
  return state;
};
