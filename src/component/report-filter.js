(function() {
	'use strict';

	/**
	 *  Report Filter Component handles the filtering of the
	 *    list of reports.
	 **/
	DI.App.ReportFilter = React.createClass({displayName: "ReportFilter",
		/**
		 * Handle Change event handler.
		 **/
		handleChange: function(event) {
			var reportsToShow = React.findDOMNode(this.refs.numOfRows).value.trim();

			//Send request to server
			//	Sending up to the top component			
			this.props.onChangedFilterLimit({
				reportsToShow: reportsToShow
			});
		},
		/**
		 * React component lifecycle callback.
		 **/
		render: function() {
			//"defaultValue" allows us to specify a starting value that will be overwritten
			//  - Can be set with a props value
			//If we tried to set the "value" the input would never change because props
			//  don't change :(
			//By setting no "value" the input is changed to whatever the user enters
			return (
				React.createElement("p", {className: "report-filter"}, 
			  		"How many months of the ", this.props.numberOfReports, " would you like to see? ", React.createElement("input", {onChange: this.handleChange, type: "number", defaultValue: this.props.reportsToShow, id: "numOfRows", ref: "numOfRows"})
			  	)
			)
		}

	});

})();