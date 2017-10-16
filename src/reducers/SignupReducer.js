import {
  EMAIL_SIGNUP,
  EMAIL_SIGNUP_SUCCESS,
  EMAIL_SIGNUP_FAIL,
  SIGNUP_EMAIL_CHANGED,
  SIGNUP_PASSWORD_CHANGED,
  SIGNUP_CONFIRM_PASSWORD_CHANGED,
  SIGNUP_PHONE_CHANGED,
  SIGNUP_NAME_CHANGED
} from '../actions/types';

const INITIAL_STATE = {
  email: '',
  password: '',
  error: '',
  user: null,
  loading: false
};

export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
        case SIGNUP_EMAIL_CHANGED:
            return { ...state, email: action.payload };
        case SIGNUP_PASSWORD_CHANGED:
            return { ...state, password: action.payload };
        case SIGNUP_CONFIRM_PASSWORD_CHANGED:
            return { ...state, confirmPassword: action.payload };
        case SIGNUP_PHONE_CHANGED:
            return { ...state, phone: action.payload };
        case SIGNUP_NAME_CHANGED:
            return { ...state, name: action.payload };
        case EMAIL_SIGNUP:
            return { ...state, loading: true, error: '' };
        case EMAIL_SIGNUP_SUCCESS:
            return { ...state, ...INITIAL_STATE, user: action.payload };
        case EMAIL_SIGNUP_FAIL:
            return { ...state, 
                error: action.payload, 
                password: '', 
                loading: false 
            };
        default:
            return state;
    }
}
