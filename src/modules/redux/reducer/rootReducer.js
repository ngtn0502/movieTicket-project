import { combineReducers } from 'redux';
import { movieReducer } from './movieReducer';

export const rootReducer = combineReducers({
  movieReducer,
});
