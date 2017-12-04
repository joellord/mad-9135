/*eslint no-unused-vars: 0 */
require("./main.scss");

import React from "react";
import { render } from "react-dom";
import Main from "./components/Main";
import { createStore } from "redux";
import counterApp from "./reducers";
import { Provider } from "react-redux";

let initialState = {
    count: 0,
    decreaseLabel: "👇",
    increaseLabel: "👆"
};

let store = createStore(counterApp, initialState);

const unsubscribe = store.subscribe(() => console.log(store.getState()));
// unsubscribe();  // Stops listening

render (
    <Provider store={store}>
        <Main />
    </Provider>,
    document.getElementById("react-app")
);
