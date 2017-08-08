//import { AsyncStorage } from 'react-native';
import firebase from 'firebase';

import {
  ACCOUNT_FETCH_SUCCESS
} from './types';

export const accountFetch = () => async (dispatch) => {
  //await accountFetchSuccess(dispatch, 'user');
  //dispatch({ type: ACCOUNT_FETCH_SUCCESS, payload: 'account' });
  try {
    await firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        accountFetchSuccess(dispatch, 'user');
      } else {
        accountFetchSuccess(dispatch, 'user1');
      }
      });
  } catch (error) {
    console.log(error);
    //emailLoginFail(dispatch);
  }
};
export const accountFetchSuccess = (dispatch, user) => {
  dispatch({
    type: ACCOUNT_FETCH_SUCCESS,
    payload: user
  });
};
