import React, { Component } from "react";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
	return {
		display: state.display
	};
};

class Display extends Component {
	render() {
		//		console.log(this.props);
		return (
			<div id="display">
				Hello, I`m Display.<div id="full-input">
					Display full input is:{this.props.display.mainDisplayValue}
				</div>
				<div id="current-input">
					Display current input is:{this.props.display.currentDisplayValue}
				</div>
			</div>
		);
	}
}

export default connect(
	mapStateToProps,
	null
)(Display);
