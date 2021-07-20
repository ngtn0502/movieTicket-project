import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';

import HomePage from './modules/main/pages/HomePage';
import MovieDetailsPage from './modules/main/pages/MovieDetailsPage';
import SignInPage from './modules/main/pages/SignInPage';
import NewsPage from './modules/main/pages/NewsPages';
import ErrorPage from './modules/main/pages/ErrorPage';
import Navbar from './modules/main/components/Navbar.js';
import Footer from './modules/main/components/Footer.component/Footer';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact>
            <Redirect to="/home" />
          </Route>
          <Route path="/home">
            <HomePage />
          </Route>
          <Route path="/movie-details/:id" exact>
            <MovieDetailsPage />
          </Route>
          <Route path="/sign-in">
            <SignInPage />
          </Route>
          <Route path="/news">
            <NewsPage />
          </Route>
          <Route path="*">
            <ErrorPage />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
