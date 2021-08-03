import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
import { StylesProvider } from '@material-ui/core/styles';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Store } from './modules/redux/store/index';
import GlobalStyles from './modules/utils/GlobalStyles.js';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={Store}>
      <StylesProvider injectFirst>
        <GlobalStyles />
        <App />
      </StylesProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
