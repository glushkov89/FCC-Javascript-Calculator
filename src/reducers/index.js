import { combineReducers } from "redux";
import movies from "./movies_reducers";
import button from "./click_reducer";

const rootReducer = combineReducers({
	movies,
	button
});

export default rootReducer;
