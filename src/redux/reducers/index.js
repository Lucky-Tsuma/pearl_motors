import { combineReducers } from "redux";
import carsReducer from "./carsReducer";

const rootReducer = combineReducers({
    count: carsReducer
});

export default rootReducer;