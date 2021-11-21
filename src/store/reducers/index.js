import {combineReducers} from "redux";

import nameReducer from "./nameReducer";
import ageReducer from "./ageReducer";

export default combineReducers({
    nameReducer, ageReducer
})
