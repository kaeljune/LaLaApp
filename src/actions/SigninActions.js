import { AsyncStorage } from 'react-native';
import firebase from 'firebase';

import {
  EMAIL_SIGNIN,
  EMAIL_SIGNIN_SUCCESS,
  EMAIL_SIGNIN_FAIL,
  SIGNIN_EMAIL_CHANGED,
  SIGNIN_PASSWORD_CHANGED,
} from './types';

export const signinEmailChanged = (text) => ({
  type: SIGNIN_EMAIL_CHANGED,
  payload: text
});

export const signinPasswordChanged = (text) => ({
  type: SIGNIN_PASSWORD_CHANGED,
  payload: text
});


export const emailSignin = ({ emailSF, passwordSF }) => async (dispatch) => {
  dispatch({ type: EMAIL_SIGNIN });
  try {
    await firebase.auth().signInWithEmailAndPassword(emailSF, passwordSF)
    .then(user => {
      AsyncStorage.setItem('@userLogin', JSON.stringify(user));
      emailSigninSuccess(dispatch, user);
    })
    .catch((error) => {
      // Handle Errors here.
      emailSigninFail(dispatch, error); 
    });
    // const userSignin = await firebase.auth().signInWithEmailAndPassword(emailSF, passwordSF);
    // await AsyncStorage.setItem('@userLogin', JSON.stringify(userSignin));
    // emailSigninSuccess(dispatch, userSignin);
  } catch (e) {
    emailSigninFail(dispatch, e);
  }
};

export const emailSigninFail = (dispatch, error) => {
  dispatch({ type: EMAIL_SIGNIN_FAIL, payload: error });
};

export const emailSigninSuccess = (dispatch, user) => {
  dispatch({
    type: EMAIL_SIGNIN_SUCCESS,
    payload: user
  });
};
