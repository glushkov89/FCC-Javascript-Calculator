import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import * as actions from "../actions";

const mapStateToProps = (state) => {
	return {
		data: state.movies,
		myinput: state.myinput
	};
};

const mapDispatchToProps = (dispatch) => {
	return bindActionCreators(actions, dispatch);
};

class Processor extends Component {
	componentDidUpdate() {
		console.log(this.props.myinput);
	}

	render() {
		//console.log(this.props.myinput);
		return <div>Hello, I`m Processor (I will be invisible)</div>;
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Processor);
