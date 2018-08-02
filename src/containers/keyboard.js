import React, { PureComponent } from "react";
import KeyboardEventHandler from "react-keyboard-event-handler";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import * as actions from "../actions";

//Components
import buttonList from "../components/buttonList";
import Button from "../components/button";

const mapDispatchToProps = (dispatch) => {
	return bindActionCreators(actions, dispatch);
};

class Keyboard extends PureComponent {
	componentWillUpdate() {
		console.log("Keyboard updated");
	}
	buttonsToRender = buttonList.map((obj) => <Button key={obj.id} {...obj} />);
	keyboardButtonsToHandle = buttonList.map((obj) => obj.code);

	copyToClipboard = (id) => {
		var textField = document.createElement("textarea");
		textField.innerText = document.getElementById(id).innerHTML;
		document.body.appendChild(textField);
		textField.select();
		document.execCommand("copy");
		textField.remove();
	};

	render() {
		//		console.log(this.props);
		return (
			<div className="keyboard">
				<KeyboardEventHandler
					handleKeys={["all"]}
					//{this.keyboardButtonsToHandle}
					handleEventType={"keyup"}
					onKeyEvent={(key, e) => this.props.buttonpushed(e.key)}
				/>
				<KeyboardEventHandler
					handleKeys={["ctrl+c"]}
					onKeyEvent={(key, e) => this.copyToClipboard("display")}
				/>
				{this.buttonsToRender}
			</div>
		);
	}
}

export default connect(
	null,
	mapDispatchToProps
)(Keyboard);
