import React, { Component } from "react";

export default class Todo extends Component {
    render() {
        return (
            <li className={this.props.status ? "done" : "open"} id={"todo-" + this.props.id}>
                <button className="todo" onClick={this.props.onClick}>{this.props.status ? "✅" : "❎"}</button>
                {this.props.text}
            </li>
        )
    }
}