import React, {Component} from "react";
import Title from "./Title";
import Btn from "./Btn";
import Counter from "./Counter";
import * as counterActions from '../actions/counterActions';
import { connect } from 'react-redux';

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

// Maps state from store to props
const mapStateToProps = (state) => {
    return {
        increaseLabel: state.counter.increaseLabel,
        decreaseLabel: state.counter.decreaseLabel
    }
};

// Maps actions to props
const mapDispatchToProps = (dispatch) => {
    return {
        increaseCounter: () => dispatch(counterActions.increaseCounter()),
        decreaseCounter: () => dispatch(counterActions.decreaseCounter())
    }
};

// Use connect to put them together
export default connect(mapStateToProps, mapDispatchToProps)(Main);