import { authActions } from '../constants';
import { authService } from '../services/auth.service';
import history from '../utils/history';

const login = (email, password) => {
  return async (dispatch) => {
    dispatch({ type: authActions.LOGGING_IN });

    try {
      const user = await authService.login(email, password);
      console.log(user);
      dispatch({ type: authActions.LOGIN_SUCCESS, user });
      history.push('/');
    } catch (err) {
      console.log('Login failed', err);
      dispatch({ type: authActions.LOGIN_FAILED });
    }
  };
};

const logout = () => ({ type: authActions.LOGGING_OUT });

const register = (email, password) => {
  return async (dispatch) => {
    dispatch({ type: authActions.REGISTERING });

    try {
      const user = await authService.register(email, password);
      console.log(user);
      dispatch({ type: authActions.REGISTER_SUCCESS, user });
      history.push('/login');
    } catch (error) {
      console.log('User registration failed', error);
      dispatch({ type: authActions.REGISTER_FAILED });
    }
  };
};

export const auth = {
  login,
  logout,
  register
};
