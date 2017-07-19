import { 
    FACEBOOK_LOGIN_SUCCESS,
    FACEBOOK_LOGIN_FAIL,
    EMAIL_LOGIN,
    EMAIL_LOGIN_SUCCESS,
    EMAIL_LOGIN_FAIL,
    PASSWORD_CHANGED,
    PHONE_CHANGED,
    EMAIL_CHANGED,
    NAME_CHANGED,
} from '../actions/types';

const INITIAL_STATE = {
  email: '',
  password: '',
  name: '',
  phone: '',
  user: null,
  error: '',
  loading: false
};

export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
        case EMAIL_CHANGED:
            return { ...state, email: action.payload };
        case PASSWORD_CHANGED:
            return { ...state, password: action.payload };
        case PHONE_CHANGED:
            return { ...state, phone: action.payload };
        case NAME_CHANGED:
            return { ...state, name: action.payload };
        case EMAIL_LOGIN:
            return { ...state, loading: true, error: '' };
        case EMAIL_LOGIN_SUCCESS:
            return { ...state, ...INITIAL_STATE, user: action.payload };
        case EMAIL_LOGIN_FAIL:
            return { ...state, error: 'Authentication Failed.', password: '', loading: false };
        case FACEBOOK_LOGIN_SUCCESS:
            return { token: action.payload };
        case FACEBOOK_LOGIN_FAIL:
            return { token: null };
        default:
            return state;
    }
}
