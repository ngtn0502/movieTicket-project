import { baseUrl } from '../../../../configs/api.configs';
import {
  GET_MOVIE_DETAIL_LOADING,
  GET_MOVIE_DETAIL_SUCCESS,
  GET_MOVIE_DETAIL_ERROR,
} from '../constantsAction';

export const getMovieDetailAction = (id) => async (dispatch) => {
  const sendRequest = async () => {
    dispatch({
      type: GET_MOVIE_DETAIL_LOADING,
    });
    const response = await fetch(
      `${baseUrl}/QuanLyPhim/LayThongTinPhim?MaPhim=${id}`
    );
    const data = await response.json();
    return data;
  };

  try {
    const data = await sendRequest();
    dispatch({
      type: GET_MOVIE_DETAIL_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: GET_MOVIE_DETAIL_ERROR,
    });
  }
};
