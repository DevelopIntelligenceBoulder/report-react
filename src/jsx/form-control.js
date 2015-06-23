(function() {
	'use strict';

	/**
	 * Form Control component.
	 *   Handles the issues events for collapsing and showing the Form Component.
	 **/
	DI.App.FormControl = React.createClass({
		render: function() {
			return (
				<h3 className="report-form-control">
					Want to add another report?
					<div className="control-button-wrapper">
						<button className="primary-button" onClick={this.props.onExpandControl}>Add One</button>
						<button onClick={this.props.onCollapseControl}>Hide</button>
					</div>
				</h3>
			)
		}
	});
})();