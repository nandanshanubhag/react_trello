import React from 'react';
import { Router, Route, Switch, Redirect } from 'react-router-dom';
import './App.css';

import { LoginPage2, RegisterPage, BoardsPage } from './pages';
import { AuthProvider } from './pages/Authentication/AuthContext';
import history from './utils/history';

function App() {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/login">
          <AuthProvider>
            <LoginPage2 />
          </AuthProvider>
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
