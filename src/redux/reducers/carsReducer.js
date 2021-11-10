import { ADD_TO_CART, REMOVE_FROM_CART, ADJUST_QUANTITY, LOAD_CURRENT_ITEM } from "../types";
import { cars } from '../../assets/data/carsData';

const initialState = {
    cars,
    cart: [],
    currentItem: null
};

const carsReducer = (state=initialState, {type, payload}) => {
    switch (type) {
        case ADD_TO_CART:
            console.log(state);
            //get item's data from cars array.
            const item = state.cars.find((car) => payload.id);
            //check if item is in cart already.
            const inCart = state.cart.find((item) => item.id === payload.id ? true : false);
            return {
                ...state,
                cart: inCart ? state.cart.map(item => item.id === payload.id ? {...item, qty: item.qty + 1} : item) : [...state.cart, {...item, qty: 1}]
            };
        case REMOVE_FROM_CART:
            return {
                ...state,
                cart: state.cart.filter((item) => item.id !== payload.id)
            };
        case ADJUST_QUANTITY:
            return {
                ...state,
                cart: state.cart.map(item => item.id === payload.id ? {...item, qty: payload.qty} : item)
            };
        case LOAD_CURRENT_ITEM:
            return {
                ...state,
                currentItem: payload
            };
        default:
            return state;
    }
};

export default carsReducer;