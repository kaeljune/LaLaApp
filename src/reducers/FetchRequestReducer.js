import { REHYDRATE } from 'redux-persist/constants';
import _ from 'lodash';
import { 
    FETCH_REQUEST,
    FETCH_LIST_GIFT,
    FETCH_GIFT,
    CART_CHANGED_ADD,
    CART_CHANGED_SUB,
    CART_CHANGED_REMOVE,
    FETCH_CART
} from '../actions/types';

const INITIAL_STATE = {
    results: [],
    listGift: null,
    cart: {
    },
    cardActive: '',
    giftActive: '',
};

export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
        case FETCH_REQUEST:
            return { ...state, results: action.payload };
            //return action.payload;x
        case FETCH_LIST_GIFT:
            return { ...state, listGift: action.payload.gifts, cardActive: action.payload.id };
        case FETCH_GIFT:
            return { ...state, giftActive: action.payload };
        case FETCH_CART:
            return Object.assign({}, state, { 
                cart: {
                    ...state.cart,
                    [action.payload.item.uid]: {
                        ...state.cart[action.payload.item.uid],
                        receiverName: action.payload.item.receiverName,
                        items: state.cart[action.payload.item.uid] ? _.merge(state.cart[action.payload.item.uid].items, action.payload.item.gifts) : action.payload.item.gifts,
                    }
                }
            });
        case CART_CHANGED_ADD:
            return { ...state, 
                cart: {
                    ...state.cart,
                    [action.payload.cardActive]: {
                        ...state.cart[action.payload.cardActive],
                        items: { 
                            ...state.cart[action.payload.cardActive].items,
                            [action.payload.id]: {
                                ...state.cart[action.payload.cardActive].items[action.payload.id],
                                quantity: state.cart[action.payload.cardActive].items[action.payload.id].quantity ? state.cart[action.payload.cardActive].items[action.payload.id].quantity + 1 : 1
                            }
                        }
                    }
                }
            };
        case CART_CHANGED_SUB:
            return { ...state, 
                cart: {
                    ...state.cart,
                    [action.payload.cardActive]: {
                        ...state.cart[action.payload.cardActive],
                        items: { 
                            ...state.cart[action.payload.cardActive].items,
                            [action.payload.id]: {
                                ...state.cart[action.payload.cardActive].items[action.payload.id],
                                quantity: state.cart[action.payload.cardActive].items[action.payload.id].quantity ? state.cart[action.payload.cardActive].items[action.payload.id].quantity - 1 : 0
                            }
                        }
                    }
                }
            };
        case CART_CHANGED_REMOVE:
            return { ...state, 
                cart: {}
            };
        case REHYDRATE:
            if (action.payload.listRequest) {
                return { ...state, 
                results: action.payload.listRequest.results,
                listGift: action.payload.listRequest.listGift,
                cart: action.payload.listRequest.cart };
            }
            return state;
        default:
            return state;
    }
}
