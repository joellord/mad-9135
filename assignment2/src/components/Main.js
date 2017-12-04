import React, {Component} from "react";
import PropTypes from "prop-types";
import Header from "./Header";
import Todolist from "./Todolist";
import AddNewTodo from "./AddNewTodo";

export default class Main extends Component {
    render() {
        return (
            <div>
                <Header />
                <Todolist todos={this.props.todoList} onTodoClick={this.props.toggleStatus}></Todolist>
                <AddNewTodo addTodoChanged={this.props.addTodoChanged} addTodoValue={this.props.addTodoValue} saveNewTodo={this.props.saveNewTodo} />
            </div>
        )
    }
}

Main.propTypes = {
    addTodoChanged: PropTypes.func.isRequired,
    saveNewTodo: PropTypes.func.isRequired,
    addTodoValue: PropTypes.string,
    todoList: PropTypes.array.isRequired
};