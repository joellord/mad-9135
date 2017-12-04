import React, { Component } from "react";
import PropTypes from "prop-types";

export default class AddNewTodo extends Component {
    render() {
        return (
            <div>
                <input type="text" value={this.props.addTodoValue} onChange={this.props.addTodoChanged} placeholder="Add New Todo" />
                <button className="add" onClick={this.props.saveNewTodo}>➕</button>
            </div>
        )
    }
}

AddNewTodo.propTypes = {
    addTodoValue: PropTypes.string,
    addTodoChanged: PropTypes.func.isRequired,
    saveNewTodo: PropTypes.func.isRequired
};