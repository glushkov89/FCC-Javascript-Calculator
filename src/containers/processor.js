import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import * as actions from "../actions";

const mapStateToProps = (state) => {
	return {
		myinput: state.myinput.input,
		currdispval: state.display.currentDisplayValue,
		maindispval: state.display.mainDisplayValue,
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
		this.mainDisplayLength - this.props.maindispval.length <
		this.props.currdispval.length
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
		let isEntry =
			this.props.currdispval === "0" || this.props.currdispval === "0.";

		if (this.props.maindispval === "") {
			if (!isEntry) {
				this.props.setMainDisplayValue(`${this.props.currdispval}${str}`);
				this.handleClearEntry();
			} else {
				if (str === "-") {
					this.props.setMainDisplayValue(`${str}`);
				}
			}
		} else {
			if (isEntry) {
				if (this.props.maindispval !== "-") {
					this.props.setMainDisplayValue(
						`${this.props.maindispval.slice(0, -1)}${str}`
					);
				}
			} else {
				if (!this.props.fulldispovf) {
					this.props.setMainDisplayValue(
						`${this.props.maindispval}${this.props.currdispval}${str}`
					);
					this.handleClearEntry();
				}
			}
		}
	};

	displayResult(result) {
		this.props.setCurrentDisplayValue(result);
		this.props.setMainDisplayValue("");
		this.props.setIsResultFlag(true);
	}

	handleEnter = () => {
		if (this.props.maindispval) {
			// eslint-disable-next-line
			let result = eval(`${this.props.maindispval}${this.props.currdispval}`);
			let str = result.toString();
			//	console.log(str);
			if (str.indexOf(".") > 0) {
				this.props.setIsDecimalFlag(true);
			}
			if (str.length > this.currDisplayLength + 1) {
				str = result.toPrecision(10);
				console.log(str);
				if (str.length > this.currDisplayLength + 1) {
					this.displayResult(result.toExponential(this.currDisplayLength - 5));
				} else {
					this.displayResult(str);
				}
			} else {
				this.displayResult(result);
			}
		}
	};

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
		//		console.log(eval("12/0"));
		//console.log(this.props.currdispovf);
		return <div>Hello, I`m Processor (I will be invisible)</div>;
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Processor);
