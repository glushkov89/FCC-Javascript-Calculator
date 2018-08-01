export default function(state = {}, action) {
	switch (action.type) {
		case "SET_ENTRY":
			return { ...state, entry: action.payload };
		case "SET_DECIMAL":
			return { ...state, decimal: action.payload };
		case "SET_NEGATIVE":
			return { ...state, negative: action.payload };
		default:
			return state;
	}
}
