import React, { Fragment } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';

import { createTheme, ThemeProvider } from '@material-ui/core/styles';
import { useMediaQuery } from '@material-ui/core';
import HomePage from './modules/main/pages/HomePage';
import MovieDetailsPage from './modules/main/pages/MovieDetailsPage';
import SignInPage from './modules/main/pages/SignInPage';
import NewsPage from './modules/main/pages/NewsPages';
import ErrorPage from './modules/main/pages/ErrorPage';
import Navbar from './modules/main/components/Navbar.js';
import Footer from './modules/main/components/Footer.component/Footer';
import BookingPage from './modules/main/pages/BookingPage.js';

function App() {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          type: prefersDarkMode ? 'dark' : 'light',
        },
      }),
    [prefersDarkMode]
  );
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Switch>
          <Route path="/sign-in" exact>
            <SignInPage />
          </Route>
          <>
            <Navbar />
            <Route path="/" exact>
              <Redirect to="/home" />
            </Route>
            <Route path="/home" exact>
              <HomePage />
            </Route>
            <Route path="/movie-details/:id" exact>
              <MovieDetailsPage />
            </Route>
            <Route path="/booking/:ids" exact>
              <BookingPage />
            </Route>
            <Route path="/news" exact>
              <NewsPage />
            </Route>
            {/* <Route path="*" exact>
              <Redirect to="/home" />
            </Route> */}
            <Footer />
          </>
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;
