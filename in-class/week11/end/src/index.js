require("./main.scss");

import React from "react";
import { render } from "react-dom";
import Main from "./components/Main";
import { createStore, applyMiddleware, compose } from "redux";
import reducers from "./reducers";
import { Provider } from "react-redux";
import thunk from "redux-thunk";

let initialState = {

};

let store = createStore(reducers, initialState, compose(
    applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : undefined
));

render (
    <Provider store={store}>
        <Main />
    </Provider>,
    document.getElementById("react-app")
);
