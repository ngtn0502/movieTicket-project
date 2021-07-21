import { baseUrl, METHOD__HTTP } from '../../../APIs/configs/api.configs';
import { USER_LOGIN_FAIL, USER_LOGIN_SUCCESS } from './constantsAction.js';

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
    history.push('/home');
    dispatch({ type: USER_LOGIN_SUCCESS });
  } catch (error) {
    dispatch({ type: USER_LOGIN_FAIL });
  }
};
