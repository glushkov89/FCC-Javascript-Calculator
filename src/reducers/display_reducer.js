export default function(state = {}, action) {
	switch (action.type) {
		case "CURRENT_INPUT":
			return {
				...state,
				currDisplay: state.currDisplay + action.payload
			};
		case "FULL_INPUT":
			return { ...state, fullDisplay: action.payload };
		default:
			return state;
	}
}
