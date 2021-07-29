import { baseUrl } from '../../../../configs/api.configs';
import { GET_CINEMA_LIST } from '../constantsAction';

// Lấy thông tin hệ thống rạp
export const getCinemaListAction = () => async (dispatch) => {
  const response = await fetch(`${baseUrl}/QuanLyRap/LayThongTinHeThongRap`);
  const data = await response.json();
  dispatch({
    type: GET_CINEMA_LIST,
    payload: data,
  });
};
