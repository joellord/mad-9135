require("./main.scss");

import React from "react";
import { render } from "react-dom";
import Main from "./components/Main";
import { createStore } from "redux";
import reducers from "./reducers";
import { Provider } from "react-redux";

let initialState = {

};

let store = createStore(reducers, initialState, window.devToolsExtension ? window.devToolsExtension() : undefined);

render (
    <Provider store={store}>
        <Main />
    </Provider>,
    document.getElementById("react-app")
);
