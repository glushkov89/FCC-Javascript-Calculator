export function buttonpushed(val) {
	return {
		type: "BUTTON",
		payload: val
	};
}
export function clearbutton() {
	return {
		type: "BUTTON",
		payload: ""
	};
}

export function updatecurrentdisplay(val) {
	return {
		type: "CURRENT_INPUT",
		payload: val
	};
}

export function updatefulldisplay(val) {
	return {
		type: "FULL_INPUT",
		payload: val
	};
}
