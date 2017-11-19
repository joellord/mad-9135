import React, {Component} from "react";
import PropTypes from "prop-types";


export default class Btn extends Component {
    render() {
        return (
            <button onClick={this.props.onClick}>{this.props.label}</button>
        )
    }
}

Btn.propTypes = {
    onClick: PropTypes.func,
    label: PropTypes.string
};