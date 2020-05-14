import { authActions } from '../constants';
import { authService } from '../services/auth.service';
import history from '../utils/history';

const login = (email, password) => {
  return (dispatch) => {
    dispatch({ type: authActions.LOGGING_IN });

    return authService.login(email, password).then(
      (user) => {
        console.log(user);
        dispatch({ type: authActions.LOGIN_SUCCESS, user });
        history.push('/');
      },
      (err) => {
        console.log('Login failed', err);
        dispatch({ type: authActions.LOGIN_FAILED });
      }
    );
  };
};

const logout = () => ({ type: authActions.LOGGING_OUT });

const signUp = () => ({ type: authActions.REGISTERING });

export const auth = {
  login,
  logout,
  signUp
};
