import { combineReducers } from 'redux';
import { homeReducer } from './home.reducer/homeReducer.js';
import { uiReducer } from './uiReducer';
import { movieDetailReducer } from './movieDetail.reducer/movieDetailReducer.js';
import { cinemaListReducer } from './movieDetail.reducer/cinemaListReducer.js';
import { authReducer } from './authReducer';
import { bookingReducer } from './booking.reducer/bookingReducer.js';

export const rootReducer = combineReducers({
  uiReducer,
  homeReducer,
  movieDetailReducer,
  authReducer,
  cinemaListReducer,
  bookingReducer,
});
