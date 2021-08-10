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
        message: 'Login successfully!',
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
        message: 'Login fail!',
        message2:
          error.message ||
          'Please make sure fill username and passwords correctly!',
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
        message: 'Sign up successfully!',
        goTo: '/sign-in',
      },
    });
    history.goBack();
  } catch (error) {
    dispatch({
      type: USER_SIGN_UP_FAIL,
      payload: {
        type: 'Error',
        message: 'Sign up fail!',
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

// UPDATE/CHANGE PROFILE INFORMATION

export const changeProfileUserAction = (userData) => async (dispatch) => {
  const userLogin = JSON.parse(localStorage.getItem('userLogin'));
  const sendRequest = async (data1) => {
    const response = await fetch(
      `${baseUrl}/QuanLyNguoiDung/CapNhatThongTinNguoiDung`,
      {
        method: METHOD__HTTP.PUT,
        body: JSON.stringify(data1),
        headers: {
          Authorization: `Bearer ${userLogin.accessToken}`,
          accept: 'application/json',
          'Content-Type': 'application/json-patch+json',
        },
      }
    );
    if (!response.ok) {
      const error = await response.text();
      throw Error(error);
    }
    const data = await response.json();
    return data;
  };
  try {
    const data = await sendRequest(userData);
    console.log(
      '🚀 ~ file: authAction.js ~ line 167 ~ changeProfileUserAction ~ data',
      data
    );
    // dispatch({
    //   type: USER_PROFILE_UPDATE_SUCCESS,
    //   payload: {
    //     type: 'Success',
    //     message: 'Update information successfully!',
    //     goTo: null,
    //   },
    // });
  } catch (error) {
    console.log(
      '🚀 ~ file: authAction.js ~ line 180 ~ changeProfileUserAction ~ error',
      error.message
    );
  }
};

// GET QR CODE

export const getQRCodeAction = (qrText) => async (dispatch) => {
  const sendRequest = async () => {
    const response = await fetch(
      `https://api.qr-code-generator.com/v1/create/
`,
      {
        method: METHOD__HTTP.POST,
        body: JSON.stringify({
          frame_name: 'no-frame',
          qr_code_text: qrText,
          image_format: 'SVG',
          qr_code_logo: 'scan-me-square',
        }),
      }
    );
    const data = response.json();
    return data;
  };
  try {
    const data = await sendRequest();
    console.log(
      '🚀 ~ file: authAction.js ~ line 211 ~ getQRCodeAction ~ data',
      data
    );
  } catch (error) {
    //
  }
};
