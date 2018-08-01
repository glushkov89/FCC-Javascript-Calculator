//Input actions
export function buttonpushed(val) {
	return {
		type: "BUTTON",
		payload: val
	};
}
export function clearinputbuffer() {
	return {
		type: "BUTTON",
		payload: ""
	};
}

//Set displ full flags
export function setcurrdisplflag(val) {
	return {
		type: "CURRENT_DISPLAY_IS_FULL",
		payload: val
	};
}

export function setfulldisplflag(val) {
	return {
		type: "FULL_DISPLAY_IS_FULL",
		payload: val
	};
}

//"Current" display field actions.
export function updatecurrentdisplay(val) {
	return {
		type: "UPDATE_CURRENT_DISPLAY",
		payload: val
	};
}

export function setcurrentdisplay(val) {
	return {
		type: "SET_CURRENT_DISPLAY",
		payload: val
	};
}

export function makenegative() {
	return {
		type: "CURRENT_INPUT_NEGATIVE",
		payload: "-"
	};
}

export function clearentry() {
	return {
		type: "CLEAR_ENTRY",
		payload: "0"
	};
}

//"Full" display field actions.
export function updatefulldisplay(val) {
	return {
		type: "FULL_INPUT",
		payload: val
	};
}

export function cleardisplay() {
	return {
		type: "CLEAR_ALL",
		payload: null
	};
}

//Current input state setters
export function setentryfl(val) {
	return {
		type: "SET_ENTRY",
		payload: val
	};
}

export function setdecimalfl(val) {
	return {
		type: "SET_DECIMAL",
		payload: val
	};
}

export function setnegativefl(val) {
	return {
		type: "SET_NEGATIVE",
		payload: val
	};
}
