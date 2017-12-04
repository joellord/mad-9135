
require("./main.scss");

import React from "react";
import ReactDOM from 'react-dom';
import Main from "./components/Main";

let state = {};
function setState(changes) {
    state = Object.assign({}, state, changes);

    ReactDOM.render(React.createElement(Main, state), document.getElementById("react-app"));
}

setState({
    todoList: [
        {key: 1, id: 1, text: "Learn React", status: 1},
        {key: 2, id: 2, text: "Learn Redux", status: 1},
        {key: 3, id: 3, text: "Reduxify this app", status: 0},
        {key: 4, id: 4, text: "Learn React Native", status: 0}
    ],
    toggleStatus: (e) => {
        let todoList = state.todoList;
        for (let i = 0; i < todoList.length; i++) {
            let todo = todoList[i];
            let id = e.target.closest("li").id.split("-")[1];
            if (todo.id == id) {
                todo.status = (todo.status) ? 0 : 1;
                break;
            }
        }
        setState({todoList});
    },
    addTodoValue: "",
    addTodoChanged: (e) => {
        let text = e.target.value;
        setState({addTodoValue: text});
    },
    saveNewTodo: () => {
        let todoList = state.todoList;
        let newTodoItem = {};
        const lastId = todoList[todoList.length-1].id;
        newTodoItem.id = lastId+1;
        newTodoItem.key = lastId+1;
        newTodoItem.text = state.addTodoValue;
        newTodoItem.status = 0;
        todoList.push(newTodoItem);
        setState({todoList, addTodoValue: ""});
    }
});