import { combineReducers } from 'redux';
import { movieListReducer } from './movieListReducer';
import { uiReducer } from './uiReducer';
import { movieDetailReducer } from './movieDetailReducer';
import { cinemaListReducer } from './cinemaListReducer';
import { authReducer } from './authReducer';
import { cineRoomReducer } from './cineRoomReducer';
import { choosingSeatReducer } from './bookingReducer';

export const rootReducer = combineReducers({
  uiReducer,
  movieListReducer,
  movieDetailReducer,
  authReducer,
  cineRoomReducer,
  cinemaListReducer,
  choosingSeatReducer,
});
