(function() {
	'use strict';

	/**
	 * Form Control component.
	 *   Handles the issues events for collapsing and showing the Form Component.
	 **/
	DI.App.FormControl = React.createClass({
		render: function() {
			return (
				<header className="report-form-control">
					<h3>Want to add another report?</h3>
					<div className="control-button-wrapper">
						<button className="primary-button" onClick={this.props.onExpandControl}>Add One</button>
						<button onClick={this.props.onCollapseControl}>Hide</button>
					</div>
				</header>
			)
		}
	});
})();