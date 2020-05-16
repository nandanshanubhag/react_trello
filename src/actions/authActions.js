import { authActions, authMessages } from '../constants';
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
      console.log('Login failed', err.message || err);
      dispatch({ type: authActions.LOGIN_FAILED, message: err.message });
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
      dispatch({
        type: authActions.REGISTER_SUCCESS,
        user,
        message: authMessages.REGISTERED_SUCCESSFULLY
      });
      history.push('/login');
    } catch (err) {
      console.log('User registration failed', err.message || err);
      dispatch({ type: authActions.REGISTER_FAILED, message: err.message });
    }
  };
};

const resetAuthState = () => {
  return (dispatch) => {
    dispatch({ type: authActions.RESET });
  };
};

export const auth = {
  login,
  logout,
  register,
  resetAuthState
};
