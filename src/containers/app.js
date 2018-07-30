import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import * as actions from "../actions";
import MoviesList from "../components/moviesList";

const mapStateToProps = (state) => {
	return {
		data: state.movies
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
		console.log(this.props);
		return (
			<div>
				<MoviesList {...this.props} />
			</div>
		);
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(App);
