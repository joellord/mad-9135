let ItemPage = React.createClass({
    propTypes: {
        name: React.PropTypes.string.isRequired,
        price: React.PropTypes.string.isRequired,
        description: React.PropTypes.string
    },

    render: function() {
        return (
            React.createElement("div", {},
                React.createElement("h2", {}, this.props.name),
                React.createElement("p", {}, this.props.description),
                React.createElement("p", {}, "Price: " + this.props.price),
                React.createElement("p", {}, "Gluten free ? " + (this.props.gluten_free ? "Yes" : "No"))
            )
        )
    }
});