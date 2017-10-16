import {
  EMAIL_SIGNIN,
  EMAIL_SIGNIN_SUCCESS,
  EMAIL_SIGNIN_FAIL,
  SIGNIN_EMAIL_CHANGED,
  SIGNIN_PASSWORD_CHANGED,
  SIGNOUT
} from '../actions/types';

const INITIAL_STATE = {
  emailSF: '',
  passwordSF: '',
  errorSF: '',
  user: null,
  loadingSF: false
};

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case SIGNIN_EMAIL_CHANGED:
      return { ...state, emailSF: action.payload };
    case SIGNIN_PASSWORD_CHANGED:
      return { ...state, passwordSF: action.payload };
    case EMAIL_SIGNIN:
      return { ...state, loadingSF: true, errorSF: '' };
    case EMAIL_SIGNIN_SUCCESS:
      return { ...state, loadingSF: false, user: action.payload };
    case EMAIL_SIGNIN_FAIL:
      return {
        ...state,
        loadingSF: false,
        errorSF: action.payload,
        passwordSF: '',
      };
    case SIGNOUT:
      return state;
    default:
      return state;
  }
}
