import React from 'react';
import { Router, Route, Switch, Redirect } from 'react-router-dom';
import './App.css';

import { LoginPage, RegisterPage, BoardsPage } from './containers';
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
        <Route path="/board">
          <BoardsPage />
        </Route>
        <Redirect from="*" to="/board" />
      </Switch>
    </Router>
  );
}

export default App;
