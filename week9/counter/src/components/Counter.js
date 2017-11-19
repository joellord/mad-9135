import React, {Component} from "react";
import PropTypes from "prop-types";


export default class Counter extends Component {
    render() {
        return (
            <div>
                {this.props.count}
            </div>
        )
    }
}

Counter.propTypes = {
    count: PropTypes.number.isRequired
};