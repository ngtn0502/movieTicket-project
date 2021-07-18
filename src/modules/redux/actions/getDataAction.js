import {
  GET_MOVIE_DATA_LOADING,
  GET_MOVIE_DATA_SUCCESS,
  GET_MOVIE_DATA_ERROR,
} from './movie.actions';
import { url } from '../../utils/constants';

export const getData = () => async (dispatch) => {
  //
  const sendRequest = async () => {
    dispatch({ type: GET_MOVIE_DATA_LOADING });
    const response = await fetch(url);
    const data = await response.json();
    if (!response.ok) {
      throw new Error('Something wrong!');
    }
    return data;
  };

  try {
    const data = await sendRequest();
    dispatch({ type: GET_MOVIE_DATA_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: GET_MOVIE_DATA_ERROR, payload: error });
  }
};
