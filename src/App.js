import React from 'react';
import { Router, Route, Switch, Redirect } from 'react-router-dom';
import './App.css';

import { LoginPage } from './containers/Authentication/LoginPage';
import { RegisterPage } from './containers/Authentication/RegisterPage';
import { BoardsPage } from './containers/Boards/Boards';
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
