(function() {
	'use strict';

	/**
	 * Form Control component.
	 *   Handles the issues events for collapsing and showing the Form Component.
	 **/
	DI.App.FormControl = React.createClass({
		render: function() {
			var button;

			//Decide if the component should show Hide or Add One button
			if (this.props.isFormCollapsed) {
				button = <button className="primary-button" onClick={this.props.onToggleControl}>Add One</button>
			} else {
				button = <button onClick={this.props.onToggleControl}>Hide</button>
			}

			return (
				<header className="report-form-control">
					<h3>Want to add another report?</h3>
					<div className="control-button-wrapper">
						{button}
					</div>
				</header>
			)
		}
	});
})();