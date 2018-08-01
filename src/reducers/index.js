import { combineReducers } from "redux";
import display from "./display_reducer";
import myinput from "./click_reducer";
import currstate from "./currstate_reducer";

const rootReducer = combineReducers({
	myinput,
	display,
	currstate
});

export default rootReducer;
