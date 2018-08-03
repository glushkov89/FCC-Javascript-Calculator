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
			<div className="display-container">
				<div id="main-display">{this.props.display.mainDisplayValue}</div>
				<div id="display">{this.props.display.currentDisplayValue}</div>
			</div>
		);
	}
}

export default connect(
	mapStateToProps,
	null
)(Display);
