import { combineReducers } from "redux";
import carsReducer from "./carsReducer";

const rootReducer = combineReducers({
    carsReducer
});

export default rootReducer;