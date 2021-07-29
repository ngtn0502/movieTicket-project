import { baseUrl, METHOD__HTTP } from '../../../configs/api.configs';
import {
  USER_LOGIN_FAIL,
  USER_LOGIN_SUCCESS,
  USER_SIGN_UP_FAIL,
} from './constantsAction.js';

export const userLoginAction = (loginData, history) => async (dispatch) => {
  const sendRequest = async (dataString) => {
    const response = await fetch(`${baseUrl}/QuanLyNguoiDung/DangNhap`, {
      method: METHOD__HTTP.POST,
      headers: {
        accept: 'application/json',
        'Content-Type': 'application/json-patch+json',
      },
      body: JSON.stringify(dataString),
    });
    const data = await response.json();
    return data;
  };
  try {
    const data = await sendRequest(loginData);
    localStorage.setItem('userLogin', JSON.stringify(data));
    dispatch({ type: USER_LOGIN_SUCCESS });
    history.push('/home');
    window.location.reload();
  } catch (error) {
    dispatch({
      type: USER_LOGIN_FAIL,
      payload: 'Đăng nhập thất bại, vui lòng kiểm tra lại thông tin!',
    });
    console.log('ó');
  }
};

export const userSignUpAction = (signUpData, history) => async (dispatch) => {
  //
  const sendRequest = async (data1) => {
    const response = await fetch(`${baseUrl}/QuanLyNguoiDung/DangKy`, {
      method: METHOD__HTTP.POST,
      body: JSON.stringify(data1),
      headers: {
        accept: 'application/json',
        'Content-Type': 'application/json-patch+json',
      },
    });
    const data = await response.json();
    return data;
  };
  //
  try {
    const data = await sendRequest(signUpData);
    console.log(data);
    history.goBack();
  } catch (error) {
    dispatch({
      type: USER_SIGN_UP_FAIL,
      payload: 'Đăng ký thất bại, vui lòng kiểm tra lại thông tin!',
    });
  }
};
