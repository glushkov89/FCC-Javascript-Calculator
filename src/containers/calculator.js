import React, { Component } from "react";
import Processor from "./processor";

class Calculator extends Component {
	render() {
		return (
			<div>
				Hello, I`m Calculator
				<Processor />
			</div>
		);
	}
}

export default Calculator;
