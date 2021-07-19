import {
  GET_MOVIE_DETAIL_LOADING,
  GET_MOVIE_DETAIL_SUCCESS,
  GET_MOVIE_DETAIL_ERROR,
} from '../actions/constantsAction.js';

const init = {
  movieDetail: {},
};

export const movieDetailReducer = (state = init, action) => {
  if (action.type === GET_MOVIE_DETAIL_SUCCESS) {
    return {
      ...state,
      movieDetail: action.payload,
    };
  }

  return { ...state };
};
