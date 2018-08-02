import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import * as actions from "../actions";

const mapStateToProps = (state) => {
	return {
		myinput: state.myinput.input,
		currdispval: state.display.currentDisplayValue,
		maindispval: state.display.mainDisplayValue,
		// isentry: state.currstate.entry,
		isdecimal: state.currentState.decimal,
		isresult: state.currentState.isresult,
		currdispovf: state.display.currentDisplayIsFullFlag,
		fulldispovf: state.display.mainDisplayFullFlag
	};
};

const mapDispatchToProps = (dispatch) => {
	return bindActionCreators(actions, dispatch);
};

class Processor extends Component {
	mainDisplayLength = 25;
	currDisplayLength = 11;

	clearInput = () => this.props.clearInputBuffer();

	setEntryState = () => {
		this.props.setIsDecimalFlag(false);
		this.props.setIsResultFlag(false);
	};

	checkDisplayOvf = () => {
		this.props.currdispval.length >= this.currDisplayLength
			? this.props.setCurrentDisplayIsFullFlag(true)
			: this.props.setCurrentDisplayIsFullFlag(false);
		this.props.maindispval.length >= this.mainDisplayLength
			? this.props.setMainDisplayIsFullFlag(true)
			: this.props.setMainDisplayIsFullFlag(false);
	};

	handleClear = () => {
		this.props.clearAllDisplays();
		this.setEntryState();
	};

	handleClearEntry = () => {
		this.props.clearEntry();
		this.setEntryState();
	};

	handleBackspace = () => {
		if (this.props.currdispval !== "0") {
			if (this.props.currdispval.endsWith(".")) {
				this.props.setIsDecimalFlag(false);
			}
			this.props.setCurrentDisplayValue(this.props.currdispval.slice(0, -1));
		}
		if (this.props.currdispval.length === 1) {
			this.props.setCurrentDisplayValue("0");
		}
	};

	handleZero = () => {
		if (this.props.currdispval === "0") {
			return; //Return from 'if' not from function
		} else {
			this.props.updateCurrentDisplayValue("0");
		}
	};

	handleOneNine = (str) => {
		if (this.props.currdispval === "0") {
			this.props.setCurrentDisplayValue(str);
		} else {
			this.props.updateCurrentDisplayValue(str);
		}
	};

	handleDecimal = () => {
		if (!this.props.isdecimal) {
			this.props.updateCurrentDisplayValue(".");
			this.props.setIsDecimalFlag(true);
		}
	};

	handleArifmetics = (str) => {
		if (this.props.maindispval === "") {
			if (this.props.currdispval !== "0" || this.props.currdispval !== "0.") {
				this.props.setMainDisplayValue(`${this.props.currdispval}${str}`);
				this.handleClearEntry();
			}
		} else {
			if (this.props.currdispval === "0" || this.props.currdispval === "0.") {
				this.props.setMainDisplayValue(
					`${this.props.maindispval.slice(0, -1)}${str}`
				);
			} else {
				if (
					this.mainDisplayLength - this.props.maindispval.length >
					this.props.currdispval.length
				) {
					this.props.setMainDisplayValue(
						`${this.props.maindispval}${this.props.currdispval}${str}`
					);
					this.handleClearEntry();
				}
			}
		}
	};

	handleEnter = () => {
		if (this.props.maindispval) {
			let result = eval(`${this.props.maindispval}${this.props.currdispval}`);
			if (result.toString(10).indexOf(".") > 0) {
				this.props.setIsDecimalFlag(true);
			}
			this.props.setMainDisplayValue("");
			this.props.setCurrentDisplayValue(result);
			if (result) {
				this.props.setIsResultFlag(true);
			}
			//&&this.props.currdispval!=='0.'
			// if (this.props.isentry) {
			// 	this.calculate(`${this.props.maindispval.slice(0, -1)}`);
			// } else {
			// 	this.calculate(`${this.props.maindispval}${this.props.currdispval}`);
			// }
		}
	};

	// pushToFull = (str) => {
	// 	if (
	// 		this.mainDisplayLength - this.props.maindispval.length >
	// 		this.props.currdispval.length
	// 	) {
	// 		this.props.updatefulldisplay(
	// 			`${this.props.maindispval}${this.props.currdispval}${str}`
	// 		);
	// 		this.handleClearEntry();
	// 	}
	// };

	// // handleMinus = () => {
	// // 	if (!this.props.isnegative) {
	// // 		this.props.makenegative();
	// // 		this.props.setnegativefl(true);
	// // 		if (this.props.isentry) this.props.setentryfl(false);
	// // 	} else {
	// // 		this.pushToFull("-");
	// // 	}
	// // };

	// calculate = (val) => {
	// 	this.props.setentryfl(true);
	// 	this.props.setcurrentdisplay(eval(val));
	// 	this.props.updatefulldisplay("");
	// };

	handleInput = (val) => {
		switch (val) {
			case "c":
				this.handleClear();
				break;
			case "ce":
				this.handleClearEntry();
				break;
			case "0":
				if (!this.props.currdispovf && !this.props.isresult) this.handleZero();
				break;
			case "1":
			case "2":
			case "3":
			case "4":
			case "5":
			case "6":
			case "7":
			case "8":
			case "9":
				if (!this.props.currdispovf && !this.props.isresult)
					this.handleOneNine(val);
				break;
			case ".":
				if (!this.props.currdispovf && !this.props.isresult)
					this.handleDecimal();
				break;
			case "-":
			case "+":
			case "*":
			case "/":
				this.handleArifmetics(val);
				break;
			case "Backspace":
			case "<=":
				if (!this.props.isresult) this.handleBackspace();
				break;
			case "=":
			case "Enter":
				this.handleEnter();
				break;
			default:
				break;
		}
	};

	componentDidMount() {
		this.handleInput(this.props.myinput);
		this.checkDisplayOvf();
		this.clearInput();
	}

	render() {
		console.log(this.props);
		//		console.log(eval("12/0"));
		//console.log(this.props.currdispovf);
		return <div>Hello, I`m Processor (I will be invisible)</div>;
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Processor);
