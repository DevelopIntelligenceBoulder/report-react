(function() {
	'use strict';

	/**
	 * Container Component is the top-level React component.
	 **/
	DI.App.Container = React.createClass({
		/**
		 *  Loads the items from the server
		 **/
		loadItemsFromServer: function() {
			//jQuery ajax interaction
			$.ajax({
				url: this.props.url,
				dataType: 'json',
				cache:false,
				success: function(data) {
					this.setState({data: data});
				}.bind(this),
				error: function(xhr, status, error) {
					console.error(this.props.url, status, error.toString());
				}.bind(this)
			});
		},
		/**
		 *  When a user submits a report, we need to refresh the list 
		 *    of reports we are showing with this added report
		 *  	- Handle this in container because data only flows one
		 *        way. From the top component to the children.
		 *   	- This callback method is passed into the Form for
		 *        later interaction.
		 **/
		handleReportSubmit: function(report) {
			//Optimistic update
			//	Makes app feel more responsive
			//	- Won't work well if the save bombed :)
			//To make this fully functioning add Ajax save to back-end
			report.id = this.state.data.length + 1;
			var reports = this.state.data;
			var addedReport = reports.concat([report]);
			this.setState({data: addedReport});
		},
		/** 
		 *  React component lifecycle callback.
		 *    - Executes exactly once during the lifecycle of the
		 *      component and sets the initial state of the component
		 *    - Executes before the component has been drawn on screen
		 **/
		getInitialState: function() {
			//Initially default this data to empty
			return {
				data: []
			};
		},
		/** 
		 *  React component lifecycle callback.
		 *    Executes after component has been drawn on screen
		 *  	- Ajax here because we want to draw something for users
		 *        without having to wait for the XHR request to come back
		 **/
		componentDidMount: function() {
			//Ajax to back-end
			//	We do the Ajax after the component mounted
			this.loadItemsFromServer();
		},
		/**
		 * React component lifecycle callback.
		 **/
		render: function() {
			//Rendered HTML
			return (
				<div className="grid" id="content">
					<h2>Report Information</h2>
					<p>There are {this.state.data.length} months of retrievable data.</p>
					<section>
						<DI.App.FormContainer />
						<DI.App.ReportList
							data={this.state.data}
							numberOfReports={this.state.data.length} />
					</section>
				</div>
			)
		}

	});

})();