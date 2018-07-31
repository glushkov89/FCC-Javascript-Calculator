import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import * as actions from "../actions";

//Components
import buttonList from "../components/buttonList";
import Button from "../components/button";

// const mapStateToProps = (state) => {
// 	return {
// 		myinput: state.button
// 	};
// };

const mapDispatchToProps = (dispatch) => {
	return bindActionCreators(actions, dispatch);
};

class Keyboard extends PureComponent {
	// componentDidMount() {
	// 	this.props.buttonpushed("AAAAAAAAAAAAAAA");
	// }
	createButton = () => {};
	createClickHandler = () => {
		return () => {};
	};

	buttons = buttonList.map((obj) => <Button key={obj.id} {...obj} />);
	render() {
		//	console.log(this.props);
		return (
			<div id="keyboard">
				Hello, I`m Keyboard, and here are my buttons:{this.buttons}
			</div>
		);
	}
}

export default connect(
	null,
	mapDispatchToProps
)(Keyboard);
