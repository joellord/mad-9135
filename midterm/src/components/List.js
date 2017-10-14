import React, {Component} from "react";
import PropTypes from "prop-types";
import ContactItem from "./ContactItem"

export default class List extends Component {
    render() {
        var contactItems = [];
        for (var i = 0; i < this.props.contacts.length; i++) {
            contactItems.push(<ContactItem {...this.props.contacts[i]} onClick={this.props.selectContact} />);
        }

        return (
            <div className="column list">
                <ul>
                    { contactItems }
                </ul>
            </div>
        );
    }
}

List.propTypes = {
    contacts: PropTypes.array.isRequired,
    selectContact: PropTypes.func.isRequired
};