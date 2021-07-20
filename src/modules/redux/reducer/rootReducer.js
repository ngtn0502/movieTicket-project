import { combineReducers } from 'redux';
import { movieListReducer } from './movieListReducer';
import { uiReducer } from './uiReducer';
import { movieDetailReducer } from './movieDetailReducer';
import { cinemaListReducer } from './cinemaListReducer';

export const rootReducer = combineReducers({
  uiReducer,
  movieListReducer,
  movieDetailReducer,
  cinemaListReducer,
});
