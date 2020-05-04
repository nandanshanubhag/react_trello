import { combineReducers } from 'redux';
import { authActions } from '../constants';

const authentication = (state = {}, action) => {
  switch (action.type) {
    case authActions.LOGGING_IN:
      return {
        isLoggingIn: true
      };

    default:
      return state;
  }
};

export const rootReducer = combineReducers({authentication});
