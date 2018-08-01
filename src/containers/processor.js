import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import * as actions from "../actions";

const mapStateToProps = (state) => {
	return {
		myinput: state.myinput.input,
		currinput: state.display.currDisplay,
		fullinput: state.display.fullDisplay,
		isentry: state.currstate.entry,
		isdecimal: state.currstate.decimal,
		isnegative: state.currstate.negative,
		currdispovf: state.display.cuDispFull,
		fulldispovf: state.display.fuDispFull
	};
};

const mapDispatchToProps = (dispatch) => {
	return bindActionCreators(actions, dispatch);
};

class Processor extends Component {
	fullDisplayLength = 15;
	currDisplayLength = 11;

	clearInput = () => this.props.clearinputbuffer();

	setEntryState = () => {
		this.props.setentryfl(true);
		this.props.setdecimalfl(false);
		this.props.setnegativefl(false);
	};

	checkDisplayOvf = () => {
		this.props.currinput.length >= this.currDisplayLength
			? this.props.setcurrdisplflag(true)
			: this.props.setcurrdisplflag(false);
		this.props.fullinput.length >= this.fullDisplayLength
			? this.props.setfulldisplflag(true)
			: this.props.setfulldisplflag(false);
	};

	pushToFull = (str) => {
		if (
			this.fullDisplayLength - this.props.fullinput.length >
			this.props.currinput.length
		) {
			this.props.updatefulldisplay(
				`${this.props.fullinput}${this.props.currinput}${str}`
			);
			this.handleClearEntry();
		}
	};

	handleClear = () => {
		this.props.cleardisplay();
		this.setEntryState();
	};

	handleClearEntry = () => {
		this.props.clearentry();
		this.setEntryState();
	};

	handleZero = () => {
		if (this.props.isentry || this.props.currinput === "-0") {
			return; //Return from 'if' not from function
		} else {
			this.props.updatecurrentdisplay("0");
		}
	};

	handleOneNine = (str) => {
		if (this.props.isentry) {
			this.props.setcurrentdisplay(str);
			this.props.setentryfl(false);
		} else {
			if (this.props.currinput === "-0") {
				this.props.setcurrentdisplay(`-${str}`);
			} else {
				this.props.updatecurrentdisplay(str);
			}
		}
	};

	handleDecimal = () => {
		if (!this.props.isdecimal) {
			this.props.updatecurrentdisplay(".");
			this.props.setdecimalfl(true);
			if (this.props.isentry) this.props.setentryfl(false);
		}
	};

	// handleMinus = () => {
	// 	if (!this.props.isnegative) {
	// 		this.props.makenegative();
	// 		this.props.setnegativefl(true);
	// 		if (this.props.isentry) this.props.setentryfl(false);
	// 	} else {
	// 		this.pushToFull("-");
	// 	}
	// };

	handleArifmetics = (str) => {
		if (!this.props.isentry) {
			this.pushToFull(str);
		} else {
			if (!this.props.fullinput.endsWith(str)) {
				this.props.updatefulldisplay(
					`${this.props.fullinput.slice(0, -1)}${str}`
				);
			}
		}
	};

	calculate = (val) => {
		this.props.setcurrentdisplay(eval(val));
		this.props.updatefulldisplay("");
	};

	handleEnter = () => {
		if (this.props.fullinput) {
			if (!this.props.isentry) {
				this.calculate(`${this.props.fullinput.slice(0, -1)}`);
			} else {
				this.calculate(
					`${this.props.fullinput.slice(0, -1)}${this.props.currinput}`
				);
			}
		}
	};

	handleEntry = (val) => {
		switch (val) {
			case "c":
				this.handleClear();
				break;
			case "ce":
				this.handleClearEntry();
				break;
			case "0":
				this.handleZero();
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
				this.handleOneNine(val);
				break;
			case ".":
				this.handleDecimal();
				break;
			case "-":
			case "+":
			case "*":
			case "/":
				this.handleArifmetics(val);
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
		if (!this.props.currdispovf) {
			this.handleEntry(this.props.myinput);
		}
		this.checkDisplayOvf();
		this.clearInput();
	}

	render() {
		//console.log(this.props);
		console.log(this.props.currdispovf);
		return <div>Hello, I`m Processor (I will be invisible)</div>;
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Processor);
