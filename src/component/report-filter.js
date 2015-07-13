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
			return (
				React.createElement("p", {className: "report-filter"}, 
			  		"How many months of the ", this.props.numberOfReports, " would you like to see? ", React.createElement("input", {onChange: this.handleChange, type: "number", id: "numOfRows", ref: "numOfRows"})
			  	)
			)
		}

	});

})();