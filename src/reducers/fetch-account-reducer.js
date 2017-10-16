import { REHYDRATE } from 'redux-persist/constants';
import {
	ACCOUNT_FETCH_SUCCESS,
	ACCOUNT_FETCH_FAIL
} from '../actions/types';

const INITIAL_STATE = {
	userLogin: null,
	isLogin: null
};

export default function (state = INITIAL_STATE, action) {
	switch (action.type) {
		case ACCOUNT_FETCH_SUCCESS:
			return { ...state, userLogin: action.payload, isLogin: true };
		case ACCOUNT_FETCH_FAIL:
			return { ...state, userLogin: null, isLogin: false };
		case REHYDRATE:
			if (action.payload.fetchAcc) {
				return { ...state, userLogin: action.payload.fetchAcc };
			}
			return state;
		default:
			return state;
	}
}
