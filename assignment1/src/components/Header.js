let Header = React.createClass({
    propTypes: {
    },
    render: function() {
        return(
            React.createElement("div", {className: "header"},
                React.createElement("p", {}, "Bacon Ipsum Restaurant"),
                React.createElement("p", {className: "logo"},
                    React.createElement("img", {src: "http://www.javascripteverything.com/algonquin/resto_logo.png", width: "150px"})
                )
            )
        )
    }
});