import React, {Component} from "react";
import PropTypes from "prop-types";
import { capitalizeFirst, capitalizeWords, calculateAge } from "../helpers/Helpers";

export default class Details extends Component {
    render() {

        if (!this.props.contact) {
            return <div className="details">Click on a contact to the left</div>
        } else {
            return (
                <div className="details">
                    <h1>{capitalizeFirst(this.props.contact.name.first)} {capitalizeFirst(this.props.contact.name.last)}</h1>
                    <p>
                        <div>Gender: {this.props.contact.gender}</div>
                        <div>DOB: {this.props.contact.dob} ({calculateAge(this.props.contact.dob)} years old)</div>
                    </p>
                    <hr />
                    <address>
                        {capitalizeWords(this.props.contact.location.street)}<br />
                        {capitalizeWords(this.props.contact.location.city)}, {capitalizeWords(this.props.contact.location.state)}<br />
                        {this.props.contact.location.postcode}
                    </address>
                    <hr />
                    <p>
                        <div>Email: <a href={"mailto:" + this.props.contact.email}>{this.props.contact.email}</a></div>
                        <div>Phone: {this.props.contact.cell}</div>
                    </p>
                    <img src={this.props.contact.picture.large} />
                </div>
            )
        }
    }
}

Details.propTypes = {
    contact: PropTypes.object
};