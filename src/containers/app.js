import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import * as actions from "../actions";
//import MoviesList from "../components/moviesList";

const mapStateToProps = (state) => {
	return {
		data: state.movies,
		myinput: state.button
	};
};

const mapDispatchToProps = (dispatch) => {
	return bindActionCreators(actions, dispatch);
};

class App extends Component {
	//WARNING! To be deprecated in React v17. Use componentDidMount instead.
	componentWillMount() {
		this.props.movieslist();
		this.props.directorslist();
	}

	render() {
		console.log(this.props.myinput);
		return (
			<div onClick={(e) => this.props.buttonpushed(e)}>
				{/* <MoviesList {...this.props} /> */}Hello World
			</div>
		);
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(App);
