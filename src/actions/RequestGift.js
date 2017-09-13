//import firebase from 'firebase';
import axios from 'axios';

import {
  REQUEST_LOCATION_CHANGED,
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
  REQUEST_GIFT_FAIL,
  REQUEST_GIFT_SUCCESS
} from './types';

import { RootAPI } from '../config/config';


export const requestGift = ({ idToken, location, sex, age, receiverName, 
  relationship, price, occasion, interest, style, other }, callback) => async (dispatch) => {
  dispatch({ type: REQUEST_GIFT });
  try {
      await axios.post(`${RootAPI}/requestGifts`, {
      idToken,
      location,
      sex,
      ages: age,
      receiverName,
      tags: style,
      relationship,
      priceRange: price,
      occasion,
      details: other,
      receiverImage: '',
    });
    await requestGiftSuccess(dispatch);
    //dispatch({ type: REQUEST_GIFT, payload: data });
    callback();
  } catch (e) {
    console.error(e);
    requestGiftFail(dispatch, e);
  }
};

export const requestGiftFail = (dispatch, error) => {
  dispatch({ type: REQUEST_GIFT_FAIL, payload: error });
};

export const requestGiftSuccess = (dispatch) => {
  dispatch({
    type: REQUEST_GIFT_SUCCESS,
  });
};

export const requestLocationChanged = (text) => ({
  type: REQUEST_LOCATION_CHANGED,
  payload: text
});
export const requestSexChanged = (text) => ({
  type: REQUEST_SEX_CHANGED,
  payload: text
});
export const requestAgeChanged = (text) => ({
  type: REQUEST_AGE_CHANGED,
  payload: text
});
export const requestReceiverNameChanged = (text) => ({
  type: REQUEST_RECEIVERNAME_CHANGED,
  payload: text
});
export const requestRelationshipChanged = (text) => ({
  type: REQUEST_RELATIONSHIP_CHANGED,
  payload: text
});
export const requestOccasionChanged = (text) => ({
  type: REQUEST_OCCASION_CHANGED,
  payload: text
});
export const requestPriceChanged = (text) => ({
  type: REQUEST_PRICE_CHANGED,
  payload: text
});
export const requestInterestChanged = (text) => ({
  type: REQUEST_INTEREST_CHANGED,
  payload: text
});
export const requestStyleChanged = (text) => ({
  type: REQUEST_STYLE_CHANGED,
  payload: text
});
export const requestOtherChanged = (text) => ({
  type: REQUEST_OTHER_CHANGED,
  payload: text
});

