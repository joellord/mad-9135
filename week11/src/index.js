require("./main.scss");

import React from "react";
import { render } from "react-dom";
import Main from "./components/Main";
import { createStore, applyMiddleware } from "redux";
import reducers from "./reducers";
import { Provider } from "react-redux";
import thunk from "redux-thunk";

let initialState = {
    weatherForm: {
        city: ""
    },
    weatherApi: {
        isFetching: false,
        dataFetched: false,
        errorData: ""
    },
    weatherData: {

    }
};

let store = createStore(reducers, initialState, applyMiddleware(thunk), window.devToolsExtension ? window.devToolsExtension() : undefined);

render (
    <Provider store={store}>
        <Main />
    </Provider>,
    document.getElementById("react-app")
);
