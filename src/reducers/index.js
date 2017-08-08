import { combineReducers } from 'redux';
import auth from './auth-reducer';
import signinReducer from './SigninReducer';
import signupReducer from './SignupReducer';
import fetchAccount from './fetch-account-reducer';
import SelectionReducer from './SelectionReducer';

export default combineReducers({
  selectedLibraryId: SelectionReducer,
  auth,
  signupState: signupReducer,
  signinState: signinReducer,
  fetchAcc: fetchAccount
});
