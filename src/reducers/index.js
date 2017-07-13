import { combineReducers } from 'redux';
import auth from './auth-reducer';
import SelectionReducer from './SelectionReducer';

export default combineReducers({
  selectedLibraryId: SelectionReducer,
  auth
});
