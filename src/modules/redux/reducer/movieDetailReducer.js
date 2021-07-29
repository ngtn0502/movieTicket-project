import {
  GET_MOVIE_DETAIL_LOADING,
  GET_MOVIE_DETAIL_SUCCESS,
  GET_MOVIE_DETAIL_ERROR,
} from '../actions/constantsAction.js';

const init = {
  isLoading: false,
  movieDetail: null,
};
// Handle lấy chi tiết của từng bộ phim
export const movieDetailReducer = (state = init, action) => {
  //
  if (action.type === GET_MOVIE_DETAIL_LOADING) {
    return {
      ...state,
      isLoading: true,
    };
  }
  //
  if (action.type === GET_MOVIE_DETAIL_SUCCESS) {
    return {
      ...state,
      isLoading: false,
      movieDetail: action.payload,
    };
  }

  return { ...state };
};
