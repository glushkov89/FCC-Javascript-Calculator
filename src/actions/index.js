//Input actions--OK
export function buttonpushed(val) {
	return {
		type: "BUTTON",
		payload: val
	};
}
export function clearInputBuffer() {
	return {
		type: "BUTTON",
		payload: ""
	};
}

//Set displ flags--OK
export function setCurrentDisplayIsFullFlag(val) {
	return {
		type: "CURRENT_DISPLAY_IS_FULL",
		payload: val
	};
}

export function setMainDisplayIsFullFlag(val) {
	return {
		type: "MAIN_DISPLAY_IS_FULL",
		payload: val
	};
}

export function setIsDecimalFlag(val) {
	return {
		type: "SET_DECIMAL",
		payload: val
	};
}

export function setIsNegativeFlag(val) {
	return {
		type: "SET_NEGATIVE",
		payload: val
	};
}

//"Current" display field actions.
export function updateCurrentDisplayValue(val) {
	return {
		type: "UPDATE_CURRENT_DISPLAY",
		payload: val
	};
}

export function setCurrentDisplayValue(val) {
	return {
		type: "SET_CURRENT_DISPLAY",
		payload: val
	};
}

export function setMainDisplayValue(val) {
	return {
		type: "MAIN_INPUT",
		payload: val
	};
}

export function clearEntry() {
	return {
		type: "CLEAR_ENTRY",
		payload: null
	};
}

export function clearAllDisplays() {
	return {
		type: "CLEAR_ALL",
		payload: null
	};
}

//Current input state setters
// export function setentryfl(val) {
// 	return {
// 		type: "SET_ENTRY",
// 		payload: val
// 	};
// }

// export function makenegative() {
// 	return {
// 		type: "CURRENT_INPUT_NEGATIVE",
// 		payload: "-"
// 	};
// }
