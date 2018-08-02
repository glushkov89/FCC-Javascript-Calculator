import { combineReducers } from "redux";
import display from "./display_reducer";
import myinput from "./click_reducer";
import currentState from "./currstate_reducer";

const rootReducer = combineReducers({
	myinput,
	display,
	currentState
});

export default rootReducer;
