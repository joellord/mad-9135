let NavMenu = React.createClass({
    render: function() {
        return (
            React.createElement("ul", {className: "nav-menu"},
                React.createElement("li", {},
                    React.createElement("a", {href: "#"}, "Menu")
                ),

                React.createElement("li", {},
                    React.createElement("a", {href: "#newitem"}, "Add New Item")
                )
            )
        )
    }
});