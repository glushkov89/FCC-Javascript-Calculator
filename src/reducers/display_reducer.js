export default function(state = {}, action) {
	switch (action.type) {
		case "UPDATE_CURRENT_DISPLAY":
			return {
				...state,
				currDisplay: state.currDisplay + action.payload
			};
		case "SET_CURRENT_DISPLAY":
			return {
				...state,
				currDisplay: action.payload
			};
		case "FULL_INPUT":
			return { ...state, fullDisplay: action.payload };
		case "CLEAR_ALL":
			return { ...state, fullDisplay: "", currDisplay: "0" };
		case "CLEAR_ENTRY":
			return { ...state, currDisplay: action.payload };
		case "CURRENT_INPUT_NEGATIVE":
			return { ...state, currDisplay: action.payload + state.currDisplay };
		case "CURRENT_DISPLAY_IS_FULL":
			return { ...state, cuDispFull: action.payload };
		case "FULL_DISPLAY_IS_FULL":
			return { ...state, fuDispFull: action.payload };
		default:
			return state;
	}
}
