//import axios from 'axios';
import firebase from 'firebase';

//import { RootAPI } from '../config/config';
import {
  CART_CHANGED,
  FETCH_CART
} from './types';

export const cartChanged = (id) => (dispatch) => {
  try {
    dispatch({ type: CART_CHANGED, payload: id });
  } catch (e) {
    console.error(e);
  }
};
