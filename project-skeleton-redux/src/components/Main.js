import React, {Component} from "react";
import Title from "./Title";
import { connect } from "react-redux";
import * as actions from "../actions";

class Main extends Component {
    render() {
        return (
            <div>
                <Title />
                <button onClick={this.props.onButtonClicked}>{this.props.buttonLabel}</button>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        buttonLabel: state.label
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onButtonClicked: () => dispatch(actions.actionCreator())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);