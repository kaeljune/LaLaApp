import { combineReducers } from 'redux';
import auth from './auth-reducer';
import nav from './NavReducer';
import signinReducer from './SigninReducer';
import signupReducer from './SignupReducer';
import fetchAccount from './fetch-account-reducer';
import SelectionReducer from './SelectionReducer';
import FetchRequestReducer from './FetchRequestReducer';

export default combineReducers({
  selectedLibraryId: SelectionReducer,
  auth,
  nav,
  signupState: signupReducer,
  signinState: signinReducer,
  fetchAcc: fetchAccount,
  listRequest: FetchRequestReducer
});
