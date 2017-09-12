let FooterItem = React.createClass({
    propTypes: {
        text: React.PropTypes.string,
        link: React.PropTypes.string
    },
    render: function() {
        return (
            React.createElement("p", {className: "footer"},
                this.props.text,
                React.createElement("a", {href: this.props.link}, this.props.link)
            )
        )
    }
});

let Footer = React.createClass({
    propTypes: {
        items: React.PropTypes.array
    },
    render: function() {
        return (
            React.createElement("div", {}, this.props.items.map(i => React.createElement(FooterItem, i)))
        )
    }
});