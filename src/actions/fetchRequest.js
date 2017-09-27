//import axios from 'axios';
import firebase from 'firebase';

//import { RootAPI } from '../config/config';
import {
  FETCH_REQUEST,
  FETCH_LIST_GIFT,
  FETCH_GIFT,
  CART_CHANGED_ADD,
  CART_CHANGED_SUB,
  CART_CHANGED_REMOVE,
  FETCH_CART,
  CART_MESSAGE_CHANGED
} from './types';

export const addQuantity = (cardActive, id) => (dispatch) => {
  try {
    dispatch({ type: CART_CHANGED_ADD, payload: { cardActive, id } });
  } catch (e) {
    console.error(e);
  }
};
export const subQuantity = (cardActive, id) => (dispatch) => {
  try {
    dispatch({ type: CART_CHANGED_SUB, payload: { cardActive, id } });
  } catch (e) {
    console.error(e);
  }
};

export const removeQuantity = () => (dispatch) => {
  try {
    dispatch({ type: CART_CHANGED_REMOVE });
  } catch (e) {
    console.error(e);
  }
};

export const fetchCart = (item) => (dispatch) => {
  try {
    dispatch({ type: FETCH_CART, payload: { item } });
  } catch (e) {
    console.error(e);
  }
};

export const cartMessageChanged = (cardActive, text) => ({
  type: CART_MESSAGE_CHANGED,
  payload: { cardActive, text }
});

export const fetchGift = (id) => (dispatch) => {
  try {
    dispatch({ type: FETCH_GIFT, payload: id });
  } catch (e) {
    console.error(e);
  }
};

export const fetchRequest = () => async (dispatch) => {
  try {
    const userId = await firebase.auth().currentUser.uid;
    const ref = await firebase.database().ref(`users/${userId}/orders`);
    console.log(12)
    await ref.once('value', snapshot => {
      const orders = snapshot.val();
      dispatch({ type: FETCH_REQUEST, payload: orders });
    });
  } catch (e) {
    console.error(e);
  }
};

export const fetchListGift = (id) => async (dispatch) => {
  try {
    const userId = await firebase.auth().currentUser.uid;
    const ref = await firebase.database().ref(`users/${userId}/orders/${id}/gifts`);
    await ref.once('value', snapshot => {
      const gifts = snapshot.val();
      dispatch({ type: FETCH_LIST_GIFT, payload: { id, gifts } });
    });
  } catch (e) {
    console.error(e);
  }
};

