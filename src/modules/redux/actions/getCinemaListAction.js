import { baseUrl } from '../../../APIs/configs/api.configs';
import { GET_CINEMA_LIST } from './constantsAction';

export const getCinemaListAction = () => async (dispatch) => {
  const response = await fetch(`${baseUrl}/QuanLyRap/LayThongTinHeThongRap`);
  const data = await response.json();
  dispatch({
    type: GET_CINEMA_LIST,
    payload: data,
  });
};
