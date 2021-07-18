import {
  GET_MOVIE_DATA_LOADING,
  GET_MOVIE_DATA_SUCCESS,
  GET_MOVIE_DATA_ERROR,
} from '../actions/movie.actions';

const init = {
  movieList: [],
};

export const movieReducer = (state = init, action) => {
  if (action.type === GET_MOVIE_DATA_LOADING) {
    //
  }
  if (action.type === GET_MOVIE_DATA_SUCCESS) {
    return {
      movieList: [...action.payload],
    };
  }
  if (action.type === GET_MOVIE_DATA_ERROR) {
    console.log(action.payload);
    //
  }

  return state;
};
