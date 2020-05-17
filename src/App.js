import React from 'react';
import { Router, Route, Switch, Redirect } from 'react-router-dom';
import './App.css';

import { LoginPage } from './containers/Authentication/LoginPage';
import { RegisterPage } from './containers/Authentication/RegisterPage';
import history from './utils/history';

function App() {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/login">
          <LoginPage />
        </Route>
        <Route path="/register">
          <RegisterPage />
        </Route>
        <Redirect from="*" to="/login" />
      </Switch>
    </Router>
  );
}

export default App;
