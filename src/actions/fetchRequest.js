//import axios from 'axios';
import firebase from 'firebase';

import { RootAPI } from '../config/config';
import {
  FETCH_REQUEST,
} from './types';


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
