import { authActions } from '../constants';

const login = () => ({ type: authActions.LOGGING_IN });

const logout = () => ({ type: authActions.LOGGING_OUT });

export const auth = {
  login,
  logout
};
