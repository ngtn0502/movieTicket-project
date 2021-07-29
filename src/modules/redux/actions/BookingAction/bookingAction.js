import {
  CHOOSING_SEAT,
  RESET__AMOUNT,
  USER_BOOKING_FAIL,
  USER_BOOKING_SUCCESS,
} from '../constantsAction.js';
import { baseUrl, METHOD__HTTP } from '../../../../configs/api.configs.js';

export const choosingSeatAction = (data) => ({
  type: CHOOSING_SEAT,
  payload: data,
});

export const bookingSeatAction = (maLichChieu, danhSachVe, history) => async (
  dispatch
) => {
  let userLogin;
  if (localStorage.getItem('userLogin')) {
    userLogin = JSON.parse(localStorage.getItem('userLogin'));
  } else {
    dispatch({
      type: USER_BOOKING_FAIL,
      payload: 'Vui lòng đăng nhập để đặt vé xem phim!',
    });
    history.push('/sign-in');
  }
  //
  const sendRequest = async (data1, data2) => {
    const response = fetch(`${baseUrl}/QuanLyDatVe/DatVe`, {
      method: METHOD__HTTP.POST,
      body: JSON.stringify({
        maLichChieu: data1,
        danhSachVe: data2,
        taiKhoanNguoiDung: userLogin.taiKhoan,
      }),
      // When using fetch header aware for api that you are sending json
      headers: {
        accept: 'application/json',
        'Content-Type': 'application/json-patch+json',
        // Access Token help API know you are already login
        Authorization: `Bearer ${userLogin.accessToken}`,
      },
    });
    const data = await response;
    return data;
  };
  //
  try {
    const data = await sendRequest(maLichChieu, danhSachVe);
    dispatch({
      type: USER_BOOKING_SUCCESS,
      payload: 'Vui lòng kiểm tra email xác nhận thông tin đặt vé!',
    });
    dispatch({
      type: RESET__AMOUNT,
    });
  } catch (error) {
    console.log(error);
  }
};
