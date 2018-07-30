export default function(state = {}, action) {
	switch (action.type) {
		case "CLICK":
			return { ...state, myinput: action.payload };
		default:
			return state;
	}
}
