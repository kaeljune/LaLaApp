import {
  REQUEST_LOCATION_CHANGED,
  CLEAR_LOCATION,
  REQUEST_SEX_CHANGED,
  REQUEST_AGE_CHANGED,
  REQUEST_RECEIVERNAME_CHANGED,
  REQUEST_RELATIONSHIP_CHANGED,
  REQUEST_OCCASION_CHANGED,
  REQUEST_PRICE_CHANGED,
  REQUEST_INTEREST_CHANGED,
  REQUEST_STYLE_CHANGED,
  REQUEST_OTHER_CHANGED,
  REQUEST_GIFT,
  REQUEST_GIFT_SUCCESS,
  REQUEST_GIFT_FAIL
} from '../actions/types';

const INITIAL_STATE = {
  loading: false,
  error: '',
  location: '',
  sex: '',
  age: '',
  receiverName: '',
  relationship: '',
  occasion: '',
  price: null,
  interest: [],
  style: [],
  other: ''
};

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case REQUEST_GIFT:
      return { ...state, loading: true, error: '' };
    case REQUEST_GIFT_SUCCESS:
      return { ...state, ...INITIAL_STATE };
    case REQUEST_GIFT_FAIL:
      return { ...state,
        error: action.payload,
        loading: false
    };
    case REQUEST_LOCATION_CHANGED:
      return { ...state, location: action.payload };
    case CLEAR_LOCATION:
      return { ...state, location: '' };
    case REQUEST_SEX_CHANGED:
      return { ...state, sex: action.payload };
    case REQUEST_AGE_CHANGED:
      return { ...state, age: action.payload };
    case REQUEST_RECEIVERNAME_CHANGED:
      return { ...state, receiverName: action.payload };
    case REQUEST_RELATIONSHIP_CHANGED:
      return { ...state, relationship: action.payload };
    case REQUEST_OCCASION_CHANGED:
      return { ...state, occasion: action.payload };
    case REQUEST_PRICE_CHANGED:
      return { ...state, price: action.payload };
    case REQUEST_INTEREST_CHANGED:
      return { ...state, interest: action.payload };
    case REQUEST_STYLE_CHANGED:
      return { ...state, style: action.payload };
    case REQUEST_OTHER_CHANGED:
      return { ...state, other: action.payload };
    default:
      return state;
  }
}
