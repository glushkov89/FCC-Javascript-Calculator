import React, { PureComponent } from "react";
import KeyboardEventHandler from "react-keyboard-event-handler";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Alert from "react-s-alert";

import * as actions from "../actions";

//Components
import buttonList from "../components/buttonList";
import Button from "../components/button";

const mapDispatchToProps = (dispatch) => {
	return bindActionCreators(actions, dispatch);
};

class Keyboard extends PureComponent {
	buttonsToRender = buttonList.map(
		(obj, i) => <Button key={obj.id} {...obj} contid={`mycontid-${i}`} />
		// i === 18 ? (
		// 	<Button key={obj.id} {...obj} class={"my-button col-6"} />
		// ) : (
		// 	<Button key={obj.id} {...obj} class={"my-button-container"} />
		// )
	);
	keyboardButtonsToHandle = buttonList.map((obj) => obj.code);

	copyToClipboard = (id) => {
		var textField = document.createElement("textarea");
		textField.innerText = document.getElementById(id).innerHTML;
		document.body.appendChild(textField);
		textField.select();
		document.execCommand("copy");
		textField.remove();
		Alert.info("Copied Result to Clipboard", {
			position: "top-left",
			effect: "bouncyflip",
			html: false,
			timeout: 2000
			//offset: 100
		});
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
				{/* <div className={"row"}>{this.buttonsToRender.slice(0, 4)}</div>
				<div className={"row"}>{this.buttonsToRender.slice(4, 8)}</div>
				<div className={"row"}>{this.buttonsToRender.slice(8, 12)}</div>
				<div className={"row"}>{this.buttonsToRender.slice(12, 16)}</div>
				<div className={"row"}>{this.buttonsToRender.slice(16)}</div> */}
			</div>
		);
	}
}

export default connect(
	null,
	mapDispatchToProps
)(Keyboard);
