import { REHYDRATE } from 'redux-persist/constants';
import { 
    FETCH_REQUEST
} from '../actions/types';

const INITIAL_STATE = {
    results: [],
};

export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
        case FETCH_REQUEST:
            return action.payload;
        case REHYDRATE:
            if (action.payload.listRequest) {
                return { ...state, results: action.payload.listRequest };
            }
            return state;
        default:
            return state;
    }
}
