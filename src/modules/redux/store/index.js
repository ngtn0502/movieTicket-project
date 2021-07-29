import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { rootReducer } from '../reducer/rootReducer';

export const Store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);
