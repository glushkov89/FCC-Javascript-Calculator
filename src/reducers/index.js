import { combineReducers } from "redux";
import display from "./display_reducer";
import myinput from "./click_reducer";

const rootReducer = combineReducers({
	//	movies,
	myinput,
	display
});

export default rootReducer;
