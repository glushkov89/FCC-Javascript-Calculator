import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";

import reducers from "./reducers";
import Calculator from "./containers/calculator";

const createStoreWithMiddleware = applyMiddleware()(createStore);
const initialState = {
	myinput: { input: "" },
	display: {
		currentDisplayValue: "0",
		mainDisplayValue: "",
		currentDisplayIsFullFlag: false,
		mainDisplayFullFlag: false
	},
	currentState: { decimal: false }
};

ReactDOM.render(
	<Provider store={createStoreWithMiddleware(reducers, initialState)}>
		<Calculator />
	</Provider>,
	document.getElementById("root")
);
