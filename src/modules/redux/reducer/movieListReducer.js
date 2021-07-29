import {
  GET_MOVIE_LIST_LOADING,
  GET_MOVIE_LIST_SUCCESS,
  GET_MOVIE_LIST_ERROR,
} from '../actions/constantsAction';

const init = {
  movieList: [],
};

// Handle get danh sách phim
export const movieListReducer = (state = init, action) => {
  if (action.type === GET_MOVIE_LIST_LOADING) {
    //
  }
  if (action.type === GET_MOVIE_LIST_SUCCESS) {
    return {
      movieList: [...action.payload],
    };
  }
  if (action.type === GET_MOVIE_LIST_ERROR) {
    console.log(action.payload);
    //
  }

  return state;
};
