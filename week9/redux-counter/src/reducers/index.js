import { combineReducers } from "redux";
import counter from "./counterReducers";

export default combineReducers({
    counter: counter
});