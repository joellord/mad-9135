import React, { Component } from "react";
import { connect } from 'react-redux';


class Counter extends Component {
    render() {
        return (
            <div>
                {this.props.count}
            </div>
        )
    }
}

// Maps state from store to props
const mapStateToProps = (state) => {
    return {
        // You can now say this.props.count
        count: state.counter.count
    }
};

// Use connect to put them together
export default connect(mapStateToProps)(Counter);