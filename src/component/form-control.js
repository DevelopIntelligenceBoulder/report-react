(function() {
	'use strict';

	/**
	 * Form Control component.
	 *   Handles the issues events for collapsing and showing the Form Component.
	 **/
	DI.App.FormControl = React.createClass({displayName: "FormControl",
		render: function() {
			var button;

			//Decide if the component should show Hide or Add One button
			if (this.props.isFormCollapsed) {
				button = React.createElement("button", {className: "primary-button", onClick: this.props.onToggleControl}, "Add One")
			} else {
				button = React.createElement("button", {onClick: this.props.onToggleControl}, "Hide")
			}

			return (
				React.createElement("header", {className: "report-form-control"}, 
					React.createElement("h3", null, "Want to add another report?"), 
					React.createElement("div", {className: "control-button-wrapper"}, 
						button
					)
				)
			)
		}
	});
})();