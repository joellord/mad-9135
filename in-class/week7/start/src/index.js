import React from "react";
import ReactDOM from "react-dom";
import Hello from "./components/Hello";

let mainView = (
    <Hello name="Joel"/>
);

ReactDOM.render(mainView, document.getElementById("react-app"));