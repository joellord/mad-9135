import React, {Component} from "react";
import PropTypes from "prop-types";
import Title from "./Title";
import Btn from "./Btn";
import Counter from "./Counter";

export default class Main extends Component {
    render() {
        return (
            <div>
                <Title />
                <Btn onClick={this.props.increaseCounter} label={this.props.increaseLabel}></Btn>
                <Counter count={this.props.count}></Counter>
                <Btn onClick={this.props.decreaseCounter} label={this.props.decreaseLabel}></Btn>
            </div>
        )
    }
}

Main.propTypes = {
    count: PropTypes.number.isRequired,
    increaseCounter: PropTypes.func.isRequired,
    decreaseCounter: PropTypes.func.isRequired,
    increaseLabel: PropTypes.string.isRequired,
    decreaseLabel: PropTypes.string.isRequired
};