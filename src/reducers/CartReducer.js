//import { REHYDRATE } from 'redux-persist/constants';
import { 
    CART_CHANGED,
    FETCH_CART
} from '../actions/types';

const INITIAL_STATE = {
  cart: null,
  customer: '',
  grandTotal: 11,
  items: null,
  orderDate: '',
  shipping: 0,
  status: 'New',
  subTotal: 10,
  tax: 1
};
export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case CART_CHANGED:
      return { ...state, cart: action.payload };
    case FETCH_CART:
      return { ...state, results: action.payload };
    default:
        return state;
  }
}
