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
            //get item's data from cars array.
            const item = state.cars.find(car => car.id === payload.id);
            //check if item is in cart already.
            const inCart = state.cart.find((item) => item.id === payload.id ? true : false);
            return {
                ...state,
                cart: inCart ? state.cart.map(item => item.id === payload.id ? {...item, qty: item.qty + 1, cost: (item.qty + 1) * item.price} : item) : [...state.cart, {...item, qty: 1, cost: item.price}]
            };
        case REMOVE_FROM_CART:
            return {
                ...state,
                cart: state.cart.filter((item) => item.id !== payload.id)
            };
        case ADJUST_QUANTITY:
            const item1 = state.cars.find(car => car.id === payload.id);
            const inCart1 = state.cart.find((item) => item.id === payload.id ? true : false);
            return {
                ...state,
                cart: inCart1 ? state.cart.map(item => item.id === payload.id ? {...item, qty: payload.qty, cost: payload.qty * item1.price} : item1) : [...state.cart, {...item1, qty: payload.qty, cost: payload.qty * item1.price}]
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