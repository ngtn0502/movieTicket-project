import { baseUrl } from '../../../../configs/api.configs';
import {
  GET_MOVIE_BY_CINEPLEX_LOADING,
  GET_MOVIE_BY_CINEPLEX_SUCCESS,
  GET_MOVIE_BY_CINEPLEX_ERROR,
} from '../constantsAction.js';

export const getMovieByCineplex = () => async (dispatch) => {
  const sendRequest = async () => {
    dispatch({ type: GET_MOVIE_BY_CINEPLEX_LOADING });
    const response = await fetch(
      `${baseUrl}/QuanLyRap/LayThongTinLichChieuHeThongRap?maNhom=GP03`
    );
    const data = await response.json();
    return data;
  };
  try {
    const data = await sendRequest();
    dispatch({ type: GET_MOVIE_BY_CINEPLEX_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: GET_MOVIE_BY_CINEPLEX_ERROR });
  }
};
