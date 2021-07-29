import {
  GET_MOVIE_LIST_LOADING,
  GET_MOVIE_LIST_SUCCESS,
  GET_MOVIE_LIST_ERROR,
} from '../constantsAction';
import { baseUrl } from '../../../../configs/api.configs';

// Create action creator thunk to fetch data from API
// best practice: doing async code in action creator thunk => maximize performance > component
export const getMovieListAction = () => async (dispatch) => {
  //
  const sendRequest = async () => {
    dispatch({ type: GET_MOVIE_LIST_LOADING });
    const response = await fetch(
      `${baseUrl}/QuanLyPhim/LayDanhSachPhim?maNhom=GP01`
    );
    const data = await response.json();
    if (!response.ok) {
      throw new Error('Something wrong!');
    }
    return data;
  };

  try {
    const data = await sendRequest();
    dispatch({ type: GET_MOVIE_LIST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: GET_MOVIE_LIST_ERROR, payload: error });
  }
};
