import { ADD_TO_CART, REMOVE_FROM_CART, ADJUST_QUANTITY, LOAD_CURRENT_ITEM } from "../types";

export const addToCart  = (itemId) => {
    return {
        type: ADD_TO_CART,
        payload: {
            id: itemId
        }
    }
}

export const removeFromCart = (itemId) => {
    return {
        type: REMOVE_FROM_CART,
        payload: {
            id:itemId
        }
    }
}

export const adjustQty = (itemId, value) => {
    return {
        type: ADJUST_QUANTITY,
        payload: {
            id: itemId,
            qty: value
        }
    }
}

export const loadCurrentItem = (item) => {
    return {
        type: LOAD_CURRENT_ITEM,
        payload: item
    }
}