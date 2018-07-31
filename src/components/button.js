import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import * as actions from "../actions";

const mapDispatchToProps = (dispatch) => {
	return bindActionCreators(actions, dispatch);
};

class Button extends Component {
	componentWillUpdate() {
		console.log("Button updated");
	}

	render() {
		//		console.log(this.props);
		return (
			<div
				id={this.props.id}
				onClick={() => this.props.buttonpushed(this.props.code)}
			>
				{this.props.code}
			</div>
		);
	}
}

export default connect(
	null,
	mapDispatchToProps
)(Button);
