import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';

import SignInPage from './modules/main/pages/SignInPage';
import Navbar from './modules/main/components/NavBar.component/Navbar';
import BookingPage from './modules/main/pages/BookingPage';
import SingUpPage from './modules/main/pages/SingUpPage';
import { mainRoutes } from './configs/route.config';
import { MainTemplates } from './modules/templates/mainTemplates.js';

function App() {
  const renderMainRoutes = () =>
    mainRoutes.map((item) => {
      const { path, Component, exact } = item;
      return (
        <Route path={path} exact={exact} key={item.id}>
          <MainTemplates>{Component}</MainTemplates>
        </Route>
      );
    });

  return (
    <Router>
      <Switch>
        {/* Special Route */}
        <Route path="/sign-in" exact>
          {' '}
          <Navbar />
          <SignInPage />
        </Route>
        <Route path="/sign-up" exact>
          {' '}
          <Navbar />
          <SingUpPage />
        </Route>
        <Route path="/" exact>
          <Redirect to="/home" />
        </Route>
        {/* BookingPage Route */}
        <Route path="/booking/:ids" exact>
          <Navbar />
          <BookingPage />
        </Route>
        {/* Main Route */}
        {renderMainRoutes()}
        {/* Admin Route */}
        {/*  */}
        {/* Undefined Route */}
        <Route path="*" exact>
          <Redirect to="/home" />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
