let AddNewForm = React.createClass({
    propTypes: {
        menuItem: React.PropTypes.object.isRequired,
        onChange: React.PropTypes.func.isRequired,
        onSubmit: React.PropTypes.func.isRequired
    },
    onNameChange: function(e) {
        this.props.onChange(Object.assign({}, this.props.menuItem, {name: e.target.value}));
    },
    onPriceChange: function(e) {
        this.props.onChange(Object.assign({}, this.props.menuItem, {price: e.target.value}));
    },
    onDescriptionChange: function(e) {
        this.props.onChange(Object.assign({}, this.props.menuItem, {description: e.target.value}));
    },
    onSubmit: function(e) {
        this.props.onSubmit(this.props.menuItem);
    },
    render: function() {
        return (
            React.createElement("form", {},
                React.createElement("input", {
                    type: "text",
                    placeholder: "Name",
                    value: this.props.menuItem.name,
                    onChange: this.onNameChange
                }),
                React.createElement("input", {
                    type: "text",
                    placeholder: "Price",
                    value: this.props.menuItem.price,
                    onChange: this.onPriceChange
                }),
                React.createElement("textarea", {
                    placeholder: "Description",
                    value: this.props.menuItem.description,
                    onChange: this.onDescriptionChange
                }),
                React.createElement("button", {type: "button", onClick: this.onSubmit}, "Submit")
            )
        )
    }
});

let AddNewPage = React.createClass({
    propTypes: {
        menuItem: React.PropTypes.object.isRequired,
        onNewMenuItemChange: React.PropTypes.func.isRequired,
        onSubmitNewItem: React.PropTypes.func.isRequired
    },

    render: function() {
        return (
            React.createElement("div", {},
                React.createElement(AddNewForm, {menuItem: this.props.menuItem, onChange: this.props.onNewMenuItemChange, onSubmit: this.props.onSubmitNewItem})
            )
        )
    }
});