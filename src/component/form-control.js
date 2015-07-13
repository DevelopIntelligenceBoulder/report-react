(function() {
	'use strict';

	/**
	 * Form Control component.
	 *   Handles the issues events for collapsing and showing the Form Component.
	 **/
	DI.App.FormControl = React.createClass({displayName: "FormControl",
		render: function() {
			return (
				React.createElement("h3", {className: "report-form-control"}, 
					"Want to add another report?", 
					React.createElement("div", {className: "control-button-wrapper"}, 
						React.createElement("button", {className: "primary-button", onClick: this.props.onExpandControl}, "Add One"), 
						React.createElement("button", {onClick: this.props.onCollapseControl}, "Hide")
					)
				)
			)
		}
	});
})();