import { combineReducers } from 'redux';
import { movieListReducer } from './home.reducer/movieListReducer.js';
import { uiReducer } from './uiReducer';
import { movieDetailReducer } from './movieDetail.reducer/movieDetailReducer.js';
import { cinemaListReducer } from './movieDetail.reducer/cinemaListReducer.js';
import { authReducer } from './authReducer';
import { bookingReducer } from './booking.reducer/bookingReducer.js';

export const rootReducer = combineReducers({
  uiReducer,
  movieListReducer,
  movieDetailReducer,
  authReducer,
  cinemaListReducer,
  bookingReducer,
});
