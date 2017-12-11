import React, {Component} from "react";
import Title from "./Title";
import { connect } from "react-redux";
import * as actions from "../actions";

class Main extends Component {
    render() {
        return (
            <div>
                <Title />
                <button onClick={this.props.onButtonClicked}>Click and wait</button>
                <div>
                    Was the button clicked (async): {this.props.gotIt ? "Yes" : "No"}
                </div>
                <hr/>
                <button onClick={this.props.fetchData}>Fetch Data</button>
                <pre>{this.props.data}</pre>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        gotIt: state.gotIt,
        data: state.data
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onButtonClicked: () => dispatch(actions.delayedAction()),
        fetchData: () => dispatch(actions.fetchData())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);