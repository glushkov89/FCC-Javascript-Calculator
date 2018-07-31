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
	componentDidUpdate() {
		if (this.props.currinput.length <= 11) {
			this.props.updatecurrentdisplay(this.props.myinput);
			this.props.clearbutton();
		}
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
