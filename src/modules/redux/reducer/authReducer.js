import {
  USER_LOGIN_FAIL,
  USER_LOGIN_SUCCESS,
} from '../actions/constantsAction.js';

const init = true;
export const authReducer = (state = init, action) => {
  if (action.type === USER_LOGIN_SUCCESS) {
    //
    console.log('success');
    return true;
  }
  if (action.type === USER_LOGIN_FAIL) {
    //
    return false;
  }
  return state;
};
