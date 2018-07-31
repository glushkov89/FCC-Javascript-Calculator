import React, { PureComponent } from "react";
import KeyboardEventHandler from "react-keyboard-event-handler";
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
	componentWillUpdate() {
		console.log("Keyboard updated");
	}
	buttonsToRender = buttonList.map((obj) => <Button key={obj.id} {...obj} />);
	keyboardButtonsToHandle = buttonList.map((obj) => obj.code);

	render() {
		//		console.log(this.props);
		return (
			<div id="keyboard">
				<KeyboardEventHandler
					handleKeys={["all"]}
					//{this.keyboardButtonsToHandle}
					handleEventType={"keyup"}
					onKeyEvent={(key, e) => this.props.buttonpushed(e.key)}
				/>
				Hello, I`m Keyboard, and here are my buttons:{this.buttonsToRender}
			</div>
		);
	}
}

export default connect(
	null,
	mapDispatchToProps
)(Keyboard);
