(function() {
	'use strict';

	/**
	 *  Report Filter Component handles the filtering of the
	 *    list of reports.
	 **/
	DI.App.ReportFilter = React.createClass({
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
				<p className="reportFilter">
			  		How many months of the {this.props.numberOfReports} would you like to see? <input onChange={this.handleChange} type="number" id="numOfRows" ref="numOfRows" />
			  	</p>
			)
		}

	});

})();