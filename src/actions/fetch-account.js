//import { AsyncStorage } from 'react-native';
import firebase from 'firebase';

import {
  ACCOUNT_FETCH_SUCCESS,
  ACCOUNT_FETCH_FAIL
} from './types';

export const accountFetch = () => async (dispatch) => {
  try {
    await firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        firebase.database().ref(`/users/${user.uid}`)
          .on('value', snapshot => {
            accountFetchSuccess(dispatch, snapshot.val());
          });
      } else {
        accountFetchFail(dispatch);
      }
    });
  } catch (error) {
    console.log(error);
    accountFetchFail(dispatch);
    //emailLoginFail(dispatch);
  }
};
export const accountFetchFail = (dispatch) => {
  dispatch({ type: ACCOUNT_FETCH_FAIL });
};

export const accountFetchSuccess = (dispatch, user) => {
  dispatch({
    type: ACCOUNT_FETCH_SUCCESS,
    payload: user
  });
};
