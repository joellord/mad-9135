require("./main.scss");

import React from "react";
import ReactDOM from 'react-dom';
import Main from "./components/Main";
import { contacts } from "./data/contacts";

const contactList = contacts;
// contactList.push(contacts[0]);
// contactList.push(contacts[1]);
// contactList.push(contacts[2]);

let state = {};
function setState(changes) {
    state = Object.assign({}, state, changes);

    state.selectContact = function(e) {
        let id = e.target.closest("li").id.split("-")[1];
        location.hash = "#/contact/" + id;
        let contact = contactList.find((i)=>i.id == id);
        setState({contact: contact});
    };

    ReactDOM.render(React.createElement(Main, state), document.getElementById("react-app"));
}


let contact = undefined;
if (location.hash.split("/").includes("contact")) {
    let id = location.hash.split("/");
    id = id[id.length-1];
    contact = contactList.find((i)=>i.id == id);
}

setState({contactList: contactList, contact: contact});