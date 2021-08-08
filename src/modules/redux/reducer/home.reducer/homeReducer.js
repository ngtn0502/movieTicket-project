import {
  GET_NEWS_ERROR,
  GET_NEWS_LOADING,
  GET_NEWS_SUCCESS,
  GET_MOVIE_BY_CINEPLEX_ERROR,
  GET_MOVIE_BY_CINEPLEX_LOADING,
  GET_MOVIE_BY_CINEPLEX_SUCCESS,
  GET_MOVIE_LIST_LOADING,
  GET_MOVIE_LIST_SUCCESS,
  GET_MOVIE_LIST_ERROR,
  GET_CINEPLEX_LOGO_LOADING,
  GET_CINEPLEX_LOGO_SUCCESS,
  GET_CINEPLEX_LOGO_ERROR,
} from '../../actions/constantsAction.js';

const init = {
  // GLOBAL
  isLoading: false,
  isError: false,
  // PART ONE AND TWO
  movieList: [],
  // PART THREE
  cineplexList: [],
  movieByCineplex: [],
  newsDatas: [],
};

// Handle get danh sách phim - SECTION ONE AND TWO
export const homeReducer = (state = init, action) => {
  if (action.type === GET_MOVIE_LIST_LOADING) {
    //
    return {
      ...state,
      isLoading: true,
    };
  }
  if (action.type === GET_MOVIE_LIST_SUCCESS) {
    console.log('payload', action.payload);
    return {
      ...state,
      isLoading: false,
      isError: false,
      movieList: [...action.payload],
    };
  }
  if (action.type === GET_MOVIE_LIST_ERROR) {
    return {
      ...state,
      isError: true,
    };
  }
  //
  // Handle get cineplex - SECTION THREE
  if (action.type === GET_CINEPLEX_LOGO_LOADING) {
    return {
      ...state,
      isLoading: true,
    };
  }
  if (action.type === GET_CINEPLEX_LOGO_SUCCESS) {
    return {
      ...state,
      isLoading: false,
      isError: false,
      cineplexList: [...action.payload],
    };
  }
  if (action.type === GET_CINEPLEX_LOGO_ERROR) {
    return {
      ...state,
      isError: true,
    };
  }
  //
  // Handle get movie by cineplex - SECTION THREE
  if (action.type === GET_MOVIE_BY_CINEPLEX_LOADING) {
    return {
      ...state,
      isLoading: true,
    };
  }
  if (action.type === GET_MOVIE_BY_CINEPLEX_SUCCESS) {
    return {
      ...state,
      isLoading: false,
      isError: false,
      movieByCineplex: [...action.payload],
    };
  }
  if (action.type === GET_MOVIE_BY_CINEPLEX_ERROR) {
    return {
      ...state,
      isError: true,
    };
  }
  // Handle get news data - SECTION FOUR
  if (action.type === GET_NEWS_LOADING) {
    return {
      ...state,
      isLoading: true,
    };
  }
  if (action.type === GET_NEWS_SUCCESS) {
    return {
      ...state,
      isLoading: false,
      isError: false,
      newsDatas: [...action.payload],
    };
  }
  if (action.type === GET_NEWS_ERROR) {
    return {
      ...state,
      isError: true,
    };
  }
  return { ...state };
};
