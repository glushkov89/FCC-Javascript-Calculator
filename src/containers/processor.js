import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import * as actions from "../actions";

const mapStateToProps = (state) => {
	return {
		data: state.movies,
		myinput: state.button
	};
};

const mapDispatchToProps = (dispatch) => {
	return bindActionCreators(actions, dispatch);
};

class Processor extends Component {
	//WARNING! To be deprecated in React v17. Use componentDidMount instead.
	componentDidMount() {
		this.props.movieslist();
		this.props.directorslist();
	}

	render() {
		console.log(this.props.myinput);
		return (
			<div onClick={(e) => this.props.buttonpushed(e)}>
				Hello, I`m Processor (I will be invisible)
			</div>
		);
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Processor);
