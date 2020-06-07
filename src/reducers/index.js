import { combineReducers } from 'redux';
import { authentication } from './authentication';
import {board} from './board';

export const rootReducer = combineReducers({
  authentication,
  board
});
