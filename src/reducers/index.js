import { combineReducers } from 'redux';
import { authentication } from './authentication';

export const rootReducer = combineReducers({ authentication: authentication });
