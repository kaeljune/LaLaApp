import { REHYDRATE } from 'redux-persist/constants';
import {
	ACCOUNT_FETCH_SUCCESS,
	ACCOUNT_FETCH_FAIL,
	EDIT
} from '../actions/types';

const INITIAL_STATE = {
	name: '',
	phone: '',
	userLogin: null,
	isLogin: null
};

export default function (state = INITIAL_STATE, action) {
	switch (action.type) {
		case ACCOUNT_FETCH_SUCCESS:
			return { ...state, userLogin: action.payload, isLogin: true, name: action.payload.name, email: action.payload.email, phone: action.payload.phone, };
		case ACCOUNT_FETCH_FAIL:
			return { ...state, userLogin: null, isLogin: false };
		case REHYDRATE:
			if (action.payload.fetchAcc) {
				return { ...state, userLogin: action.payload.fetchAcc, name: action.payload.name, email: action.payload.email, phone: action.payload.phone };
			}
			return state;

		default:
			return state;
	}
}
