let MenuItem = React.createClass({
    propTypes: {
        key: React.PropTypes.number,
        name: React.PropTypes.string.isRequired,
        price: React.PropTypes.string.isRequired,
        description: React.PropTypes.string
    },

    render: function() {
        return (
            React.createElement("li", {},
                React.createElement("a", {className: "menu-item-link", href: "#/item/" + this.props.id},
                    React.createElement("h2", {className: this.props.gluten_free ? "gluten_free" : ""}, this.props.name),
                    React.createElement("div", {className: "price"}, this.props.price),
                    React.createElement("div", {}, this.props.description)
                )
            )
        )
    }
});

let MenuItems = React.createClass({
    propTypes: {
        items: React.PropTypes.array.isRequired
    },

    render: function() {
        return (
            React.createElement("ul", {}, this.props.items.map(i => React.createElement(MenuItem, i)))
        )
    }
});

let MainPage = React.createClass({
    propTypes: {
        items: React.PropTypes.array.isRequired
    },

    render: function() {
        return (
            React.createElement(MenuItems, {items: this.props.items})
        )
    }
});