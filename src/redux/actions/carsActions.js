import { ADD_QUANTITY, SUBTRACT_QUANTITY } from "../types";

export const addCount = (id) => {
    return {
        type: ADD_QUANTITY,
        payload: id
    }
}

export const subtractCount = (id) => {
    return {
        type: SUBTRACT_QUANTITY,
        payload: id
    }
}
