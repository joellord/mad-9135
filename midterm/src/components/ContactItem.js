import React, {Component} from "react";
import PropTypes from "prop-types";
import { capitalizeFirst } from "../helpers/Helpers";

export default class ContactItem extends Component {
    render() {
        return (
            <li className="contact" onClick={this.props.onClick} id={"contact-" + this.props.id}>
                <div className="row">
                    <div className="column pic">
                        <img src={this.props.picture.thumbnail} />
                    </div>
                    <div className="column data">
                        {capitalizeFirst(this.props.name.first)} {capitalizeFirst(this.props.name.last)}
                        <br />
                        {this.props.dob.split(" ")[0]}
                    </div>
                </div>
            </li>
        )
    }
}

ContactItem.propTypes = {
    name: PropTypes.object.isRequired,
    onClick: PropTypes.func.isRequired
};