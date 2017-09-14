//import axios from 'axios';
import firebase from 'firebase';

//import { RootAPI } from '../config/config';
import {
  FETCH_REQUEST,
  FETCH_LIST_GIFT,
  FETCH_GIFT
} from './types';

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
      dispatch({ type: FETCH_LIST_GIFT, payload: gifts });
    });
  } catch (e) {
    console.error(e);
  }
};

