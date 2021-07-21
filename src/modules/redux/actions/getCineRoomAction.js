import { baseUrl } from '../../../APIs/configs/api.configs';
import {
  GET_CINE_ROOM_ERROR,
  GET_CINE_ROOM_LOADING,
  GET_CINE_ROOM_SUCCESS,
} from './constantsAction.js';

export const getCineRoomAction = (params) => async (dispatch) => {
  //
  const sendRequest = async (id) => {
    const response = await fetch(
      `${baseUrl}/QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu=${id}`
    );
    const data = response.json();
    return data;
  };

  try {
    dispatch({
      type: GET_CINE_ROOM_LOADING,
    });
    const data = await sendRequest(params);
    dispatch({
      type: GET_CINE_ROOM_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: GET_CINE_ROOM_ERROR,
    });
  }
};
