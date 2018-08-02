export default function(state = {}, action) {
	switch (action.type) {
		case "SET_DECIMAL":
			return { ...state, decimal: action.payload };
		case "SET_IS_RESULT":
			return { ...state, isresult: action.payload };
		default:
			return state;
	}
}
