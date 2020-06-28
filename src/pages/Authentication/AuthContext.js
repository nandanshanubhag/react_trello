import React, { createContext, useContext, useReducer } from 'react';

const AuthContext = createContext();

const initialState = {
  user: {},
  loggedIn: false,
  registered: false
};

const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
const REGISTER_SUCCESS = 'REGISTER_SUCCESS';

export const loginSuccess = (user) => {
  return { type: LOGIN_SUCCESS, user };
};

export const registerSuccess = () => {
  return { type: REGISTER_SUCCESS };
};

const todoReducer = (state, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        loggedIn: true,
        user: action.user
      };
    case REGISTER_SUCCESS:
      return {
        registered: true
      };
    default:
      return state;
  }
};

const AuthProvider = (props) => {
  const [auth, dispatch] = useReducer(todoReducer, initialState);

  const authDate = { auth, dispatch };

  return <AuthContext.Provider value={authDate} {...props} />;
};

const useAuthContext = () => {
  return useContext(AuthContext);
};

export { AuthProvider, useAuthContext };
