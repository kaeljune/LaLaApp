//import { AsyncStorage } from 'react-native';
import firebase from 'firebase';

import {
  EMAIL_SIGNUP,
  EMAIL_SIGNUP_SUCCESS,
  EMAIL_SIGNUP_FAIL,
  SIGNUP_EMAIL_CHANGED,
  SIGNUP_PASSWORD_CHANGED,
  SIGNUP_CONFIRM_PASSWORD_CHANGED,
  SIGNUP_PHONE_CHANGED,
  SIGNUP_NAME_CHANGED
} from './types';

export const signupEmailChanged = (text) => ({
  type: SIGNUP_EMAIL_CHANGED,
  payload: text
});
export const signupPasswordChanged = (text) => ({
  type: SIGNUP_PASSWORD_CHANGED,
  payload: text
});
export const signupConfirmPasswordChanged = (text) => ({
  type: SIGNUP_CONFIRM_PASSWORD_CHANGED,
  payload: text
});
export const signinNameChanged = (text) => ({
  type: SIGNUP_NAME_CHANGED,
  payload: text
});
export const signinPhoneChanged = (text) => ({
  type: SIGNUP_PHONE_CHANGED,
  payload: text
});


export const emailSignup = ({ email, password, name, phone }) => async (dispatch) => {
    dispatch({ type: EMAIL_SIGNUP });
    try {
        await firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(user => {
            user.updateProfile({
              displayName: name,
              phoneNumber: phone,
            });
            firebase.database().ref(`users/${user.uid}`)
            .update({ name, phone, email, avatar: '' }, () => {
            });
            //AsyncStorage.setItem('@userLogin', JSON.stringify(user));
            emailSignupSuccess(dispatch, user);
        })
        .catch((error) => {
            emailSignupFail(dispatch, error);
        });
    } catch (error) {
        console.log(error);
    }
};

export const emailSignupFail = (dispatch, error) => {
  dispatch({ type: EMAIL_SIGNUP_FAIL, payload: error });
};

export const emailSignupSuccess = (dispatch, user) => {
  dispatch({
    type: EMAIL_SIGNUP_SUCCESS,
    payload: user
  });
};
