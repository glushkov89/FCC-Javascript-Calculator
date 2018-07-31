export default function(state = {}, action) {
	switch (action.type) {
		case "BUTTON":
			return { ...state, input: action.payload };
		default:
			return state;
	}
}
