import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import * as actions from "../actions";

const mapStateToProps = (state) => {
	return {
		//state: state,
		myinput: state.myinput.input,

		currinput: state.display.currDisplay,
		fullinput: state.display.fullDisplay
	};
};

const mapDispatchToProps = (dispatch) => {
	return bindActionCreators(actions, dispatch);
};

class Processor extends Component {
	fullDisplayLength = 20;
	currDisplayLength = 11;
	componentDidMount() {
		if (this.props.currinput.length < this.currDisplayLength) {
			this.props.updatecurrentdisplay(this.props.myinput);
		}
		this.props.clearinputbuffer();
	}

	render() {
		console.log(this.props);
		return <div>Hello, I`m Processor (I will be invisible)</div>;
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Processor);
