import { authActions } from '../constants';

export const authentication = (state = {}, action) => {
  switch (action.type) {
    case authActions.LOGGING_IN:
      return {
        isLoggingIn: true
      };
    case authActions.REGISTERING:
      return {
        registering: true
      };
    case authActions.LOGIN_SUCCESS:
      return {
        loggedIn: true
      };
    case authActions.LOGIN_FAILED:
      return {
        loginFailed: true
      };

    default:
      return state;
  }
};
