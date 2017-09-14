import { REHYDRATE } from 'redux-persist/constants';
import { 
    FETCH_REQUEST,
    FETCH_LIST_GIFT,
    FETCH_GIFT
} from '../actions/types';

const INITIAL_STATE = {
    results: [],
    listGift: [],
    giftActive: '',
};

export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
        case FETCH_REQUEST:
            return { ...state, results: action.payload };
            //return action.payload;
        case FETCH_LIST_GIFT:
            return { ...state, listGift: action.payload };
        case FETCH_GIFT:
            return { ...state, giftActive: action.payload };
            //return action.payload;
        case REHYDRATE:
            if (action.payload.listRequest) {
                return { ...state, 
                results: action.payload.listRequest.results,
                listGift: action.payload.listRequest.listGift };
            }
            return state;
        default:
            return state;
    }
}
