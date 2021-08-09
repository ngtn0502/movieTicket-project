import {
  USER_LOGOUT,
  USER_LOGIN,
  GET_USER_PROFILE_LOADING,
  GET_USER_PROFILE_SUCCESS,
  GET_USER_PROFILE_ERROR,
} from '../actions/constantsAction.js';

const init = {
  isLoginSuccess: false,
  loginData: null,
  isLoading: false,
  userProfile: {},
  isError: false,
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
  // GET USER PROFILE
  if (action.type === GET_USER_PROFILE_LOADING) {
    //
    return {
      ...state,
      isLoading: true,
    };
  }
  if (action.type === GET_USER_PROFILE_SUCCESS) {
    //
    console.log('success');
    return {
      ...state,
      isLoading: false,
      userProfile: action.payload,
    };
  }
  if (action.type === GET_USER_PROFILE_ERROR) {
    //
    return {
      ...state,
      isLoading: false,
      isError: true,
    };
  }
  return state;
};
