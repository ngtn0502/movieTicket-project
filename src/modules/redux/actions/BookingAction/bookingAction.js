import { CHOOSING_SEAT } from '../constantsAction.js';
import { baseUrl, METHOD__HTTP } from '../../../../APIs/configs/api.configs';

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
    history.push('/');
  } catch (error) {
    console.log(error);
  }
};
