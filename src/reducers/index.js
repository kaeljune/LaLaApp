import { combineReducers } from 'redux';
//import auth from './auth-reducer';
import nav from './NavReducer';
import signinReducer from './SigninReducer';
import signupReducer from './SignupReducer';
import fetchAccount from './fetch-account-reducer';
import FetchRequestReducer from './FetchRequestReducer';
import RequestGiftReducer from './RequestGiftReducer';

export default combineReducers({
  //auth,
  nav,
  signupState: signupReducer,
  signinState: signinReducer,
  fetchAcc: fetchAccount,
  listRequest: FetchRequestReducer,
  requestGiftState: RequestGiftReducer
});
