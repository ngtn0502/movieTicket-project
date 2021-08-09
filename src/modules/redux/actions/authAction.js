import { baseUrl, METHOD__HTTP } from '../../../configs/api.configs';
import {
  USER_LOGIN_FAIL,
  USER_LOGIN,
  USER_SIGN_UP_FAIL,
  USER_SIGN_UP_SUCCESS,
  USER_LOGIN_SUCCESS,
  GET_USER_PROFILE_LOADING,
  GET_USER_PROFILE_SUCCESS,
  GET_USER_PROFILE_ERROR,
} from './constantsAction.js';

// SIGN IN PAGE
export const userLoginAction = (loginData, history) => async (dispatch) => {
  const sendRequest = async (dataString) => {
    if (dataString.taiKhoan.replace(/ /g, '').length < 4) {
      throw Error("Username's length must bigger than 4 characters!");
    }
    if (dataString.matKhau.replace(/ /g, '').length < 4) {
      throw Error("Password's length must bigger than 4 characters!");
    }
    const response = await fetch(`${baseUrl}/QuanLyNguoiDung/DangNhap`, {
      method: METHOD__HTTP.POST,
      headers: {
        accept: 'application/json',
        'Content-Type': 'application/json-patch+json',
      },
      body: JSON.stringify(dataString),
    });
    if (!response.ok) {
      const message = await response.text();
      throw Error(message);
    }
    const data = await response.json();
    return data;
  };
  try {
    const data = await sendRequest(loginData);
    localStorage.setItem('userLogin', JSON.stringify(data));
    dispatch({
      type: USER_LOGIN_SUCCESS,
      payload: {
        type: 'Success',
        message: 'Đăng nhập thành công!',
        goTo: null,
      },
    });
    dispatch({ type: USER_LOGIN, payload: data });
    history.goBack();
  } catch (error) {
    dispatch({
      type: USER_LOGIN_FAIL,
      payload: {
        type: 'Error',
        message: 'Đăng nhập thất bại!',
        message2: error.message || 'Vui lòng kiểm tra lại thông tin.',
        goTo: null,
      },
    });
  }
};
// SIGN UP PAGE
export const userSignUpAction = (signUpData, history) => async (dispatch) => {
  //
  const sendRequest = async (data1) => {
    if (data1.taiKhoan.replace(/ /g, '').length < 4) {
      throw Error("Username's length must bigger than 4 characters!");
    }
    if (data1.matKhau.replace(/ /g, '').length < 4) {
      throw Error("Password's length must bigger than 4 characters!");
    }
    const response = await fetch(`${baseUrl}/QuanLyNguoiDung/DangKy`, {
      method: METHOD__HTTP.POST,
      body: JSON.stringify(data1),
      headers: {
        accept: 'application/json',
        'Content-Type': 'application/json-patch+json',
      },
    });
    if (!response.ok) {
      const text = await response.text();
      throw Error(text);
    }
    const data = await response.json();
    return data;
  };
  //
  try {
    const data = await sendRequest(signUpData);
    dispatch({
      type: USER_SIGN_UP_SUCCESS,
      payload: {
        type: 'Success',
        message: 'Đăng kí thành công!',
        goTo: '/home',
      },
    });
    history.goBack();
  } catch (error) {
    dispatch({
      type: USER_SIGN_UP_FAIL,
      payload: {
        type: 'Error',
        message: 'Sign Up Fail!',
        message2: error.message,
        goTo: null,
      },
    });
  }
};

// PROFILE PAGE

export const getUserProfileAction = () => async (dispatch) => {
  const userLogin = JSON.parse(localStorage.getItem('userLogin'));
  const sendRequest = async () => {
    dispatch({ type: GET_USER_PROFILE_LOADING });
    const response = await fetch(
      `${baseUrl}/QuanLyNguoiDung/ThongTinTaiKhoan`,
      {
        method: METHOD__HTTP.POST,
        body: JSON.stringify({
          taiKhoan: userLogin.taiKhoan,
        }),
        headers: {
          accept: 'application/json',
          'Content-Type': 'application/json-patch+json',
        },
      }
    );
    const data = response.json();
    return data;
  };
  try {
    const data = await sendRequest();
    dispatch({ type: GET_USER_PROFILE_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: GET_USER_PROFILE_ERROR });
  }
};
