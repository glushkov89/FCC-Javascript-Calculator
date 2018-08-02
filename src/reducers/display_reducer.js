export default function(state = {}, action) {
	switch (action.type) {
		case "UPDATE_CURRENT_DISPLAY":
			return {
				...state,
				currentDisplayValue: state.currentDisplayValue + action.payload
			};
		case "SET_CURRENT_DISPLAY":
			return {
				...state,
				currentDisplayValue: action.payload
			};
		case "MAIN_INPUT":
			return { ...state, mainDisplayValue: action.payload };
		case "CLEAR_ALL":
			return { ...state, mainDisplayValue: "", currentDisplayValue: "0" };
		case "CLEAR_ENTRY":
			return { ...state, currentDisplayValue: "0" };
		case "CURRENT_INPUT_NEGATIVE":
			return {
				...state,
				currentDisplayValue: action.payload + state.currentDisplayValue
			};
		case "CURRENT_DISPLAY_IS_FULL":
			return { ...state, currentDisplayIsFullFlag: action.payload };
		case "MAIN_DISPLAY_IS_FULL":
			return { ...state, mainDisplayFullFlag: action.payload };
		default:
			return state;
	}
}
