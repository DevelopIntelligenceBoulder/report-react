(function() {
	'use strict';

	DI.App.ReportList = React.createClass({displayName: "ReportList",
		/** 
		 *  React component lifecycle callback.
		 *    - Executes exactly once during the lifecycle of the
		 *      compoenet and sets the initial state of the component
		 *    - Executes before the component has been drawn on screen
		 **/
		getInitialState: function() {
			return {
				selected: 0,
				reportsToShow: 5
			};
		},
		/**
		 * Handle Report Selected event handler.
		 * @param id is the Id of the report selected
		 **/
		handleReportSelected: function(id) {
			this.setState({selected: id});
			console.log('handleReportSelected');
		},
		/**
		 * Handle Changed Filter Limit event handler.
		 **/
		handleChangedFilterLimit: function(data) {
			var reportsToShow = Number(data.reportsToShow) + 1;
			this.setState({reportsToShow: reportsToShow});
			console.log('handleChangedFilterLimit');
		},
		/**
		 * React component lifecycle callback.
		 **/		
		render: function() {
			//Why key={car.id} ... From debugger:
			//	Warning: Each child in an array or iterator should have
			//		a unique "key" prop. Check the render method of 
			//		ReportList. http://facebook.github.io/react/docs/multiple-component.html#dynamic-children
			
			//Need to filter nodes. 
			//	- Slice does not mutate the underlying array
			//	- Slice simply copies off the number of indices desired
			var filteredNodes = this.props.data.slice(1, this.state.reportsToShow);
			var reportNodes = filteredNodes.map(function(report) {
				//Icon-fonts for font-awesome
				var URL = [
					'fa-angellist',
					'fa-smile-o',
					'fa-thumbs-o-up'
				];

				//Used for applying odd/even styling
				var isOddReport = report.id % 2;

				//Pick a random number from 0 to 2
				var imageChoice = Math.round(Math.random()*2);
				//Pick image based on index
				var goodImage = URL[imageChoice];
				//Setting if this report is to be selected
				var isSelected = this.state.selected === report.id;

				return (
					React.createElement(DI.App.Report, {
						//key needed to make sure dynamic children are consistent
						//Allows React to re-organize code rather than destroy and rebuild
						key: report.id, 
						id: report.id, 
						date: report.date, 
						quantity: report.quantity, 
						netSale: report.netSale, 
						costOfGoods: report.costOfGoods, 
						grossProfit: report.netSale-report.costOfGoods, 
						isOddReport: isOddReport, 
						goodImage: goodImage, 
						isSelected: isSelected, 						
						onReportSelect: this.handleReportSelected})
				);
			}.bind(this));
			//Rendered HTML
			return (
				React.createElement("section", null, 
					React.createElement(DI.App.ReportFilter, {
						numberOfReports: this.props.numberOfReports, 
						onChangedFilterLimit: this.handleChangedFilterLimit, 
						reportsToShow: this.state.reportsToShow}), 
					React.createElement("ul", {className: "report-listing"}, reportNodes)
				)
			)
		}
	});
})();