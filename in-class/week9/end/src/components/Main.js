import React, {Component} from "react";
import Title from "./Title";
import Btn from "./Btn";
import Counter from "./Counter";
import { connect } from "react-redux";
import * as counterActions from "../actions";

class Main extends Component {
    render() {
        return (
            <div>
                <Title />
                <Btn onClick={this.props.increaseCounter} label={this.props.increaseLabel}></Btn>
                <Counter></Counter>
                <Btn onClick={this.props.decreaseCounter} label={this.props.decreaseLabel}></Btn>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        increaseLabel: state.increaseLabel,
        decreaseLabel: state.decreaseLabel
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        increaseCounter: () => dispatch(counterActions.increaseCounter()),
        decreaseCounter: () => dispatch(counterActions.decreaseCounter())
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);