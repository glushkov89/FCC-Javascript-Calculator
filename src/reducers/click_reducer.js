export default function(state = {}, action) {
	switch (action.type) {
		case "BUTTON":
			return { ...state, myinput: action.payload };
		default:
			return state;
	}
}
