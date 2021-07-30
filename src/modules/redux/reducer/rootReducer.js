import { combineReducers } from 'redux';
import { movieListReducer } from './movieListReducer';
import { uiReducer } from './uiReducer';
import { movieDetailReducer } from './movieDetailReducer';
import { cinemaListReducer } from './cinemaListReducer';
import { authReducer } from './authReducer';
import { bookingReducer } from './bookingReducer';

export const rootReducer = combineReducers({
  uiReducer,
  movieListReducer,
  movieDetailReducer,
  authReducer,
  cinemaListReducer,
  bookingReducer,
});
