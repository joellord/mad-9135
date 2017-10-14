import React, {Component} from "react";
import Title from "./Title";
import List from "./List";
import Details from "./Details";
import PropTypes from "prop-types";


export default class Main extends Component {
    render() {
        return (
            <div className="row">
                <Title />
                <div>
                    <List contacts={this.props.contactList} selectContact={this.props.selectContact}/>
                    <Details contact={this.props.contact} />
                </div>
            </div>
        )
    }
}

Main.propTypes = {
    contactList: PropTypes.array.isRequired,
    selectContact: PropTypes.func.isRequired,
    contact: PropTypes.object
};