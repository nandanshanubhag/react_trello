import { authActions } from '../constants';

export const authentication = (state = {}, action) => {
  switch (action.type) {
    case authActions.LOGGING_IN:
      return {
        loggingIn: true
      };
    case authActions.LOGIN_SUCCESS:
      return {
        loggedIn: true,
        user: action.user
      };
    case authActions.LOGIN_FAILED:
      return { loginFailed: true, message: action.message };
    case authActions.REGISTERING:
      return {
        registering: true
      };
    case authActions.REGISTER_SUCCESS:
      return {
        registered: true,
        message: action.message,
        user: action.user
      };
    case authActions.REGISTER_FAILED:
      return { message: action.message };
    case authActions.RESET:
      return {};

    default:
      return state;
  }
};
