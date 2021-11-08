import { ADD_QUANTITY, SUBTRACT_QUANTITY } from "../types";

const initialState = {
    toyota_prius :0,
    lambo :0,
    audi :0,
    maybach :0,
    lexus :0,
    chr :0
};

const carsReducer = (state=initialState, {type, payload}) => {
    switch (type) {
        case ADD_QUANTITY:
            if (payload === "toyota_prius") {return {...state, toyota_prius: state.toyota_prius + 1}};
            if (payload === "lambo") {return {...state, lambo: state.lambo + 1}};
            if (payload === "audi") {return {...state, audi: state.audi + 1}};
            if (payload === "maybach") {return {...state, maybach: state.maybach + 1}};
            if (payload === "lexus") {return {...state, lexus: state.lexus + 1}};
            if (payload === "chr") {return {...state, chr: state.chr + 1}};
            break;
        case SUBTRACT_QUANTITY:
            if (state === 0) {
                return state
            } else {
                if (payload === "toyota_prius") {
                    return state.toyota_prius === 0 ? state : {...state, toyota_prius: state.toyota_prius - 1}
                }
                if (payload === "lambo") {
                    return state.lambo === 0 ? state : {...state, lambo: state.lambo - 1}
                }
                if (payload === "audi") {
                    return state.audi === 0 ? state : {...state, audi: state.audi - 1}
                }
                if (payload === "maybach") {
                    return state.maybach === 0 ? state : {...state, maybach: state.maybach - 1}
                }
                if (payload === "lexus") {
                    return state.lexus === 0 ? state : {...state, lexus: state.lexus - 1}
                }
                if (payload === "chr") {
                    return state.chr === 0 ? state : {...state, chr: state.chr - 1}
                }
            }
            break;
        default:
            return state;
    }
};

export default carsReducer;