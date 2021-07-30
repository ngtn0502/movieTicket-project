import {
  GET_MOVIE_LIST_LOADING,
  GET_MOVIE_LIST_SUCCESS,
  GET_MOVIE_LIST_ERROR,
} from '../../actions/constantsAction';

const init = {
  isLoading: false,
  movieList: [],
};

// Handle get danh sách phim
export const movieListReducer = (state = init, action) => {
  if (action.type === GET_MOVIE_LIST_LOADING) {
    //
    return {
      ...state,
      isLoading: true,
    };
  }
  if (action.type === GET_MOVIE_LIST_SUCCESS) {
    return {
      ...state,
      isLoading: false,
      movieList: [...action.payload],
    };
  }
  if (action.type === GET_MOVIE_LIST_ERROR) {
    console.log(action.payload);
    //
  }

  return state;
};
