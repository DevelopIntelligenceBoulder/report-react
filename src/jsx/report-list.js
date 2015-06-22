(function() {
	'use strict';

	DI.App.LemonaideReportList = React.createClass({
		/** 
		 *  React component lifecycle callback.
		 *    - Executes exactly once during the lifecycle of the
		 *      compoenet and sets the initial state of the component
		 *    - Executes before the component has been drawn on screen
		 **/
		getInitialState: function() {
			return {selected: 0};
		},
		/**
		 * Handle Report Selected event handler.
		 **/
		handleReportSelected: function(data) {
			this.setState({selected: data.id});
		},
		/**
		 * Handle Changed Filter Limit event handler.
		 **/
		handleChangedFilterLimit: function(data) {
			var reportsToShow = Number(data.reportsToShow) + 1;
			this.setState({reportsToShow: reportsToShow});
		},
		/**
		 * React component lifecycle callback.
		 **/		
		render: function() {
			//Why key={car.id} ... From debugger:
			//	Warning: Each child in an array or iterator should have
			//		a unique "key" prop. Check the render method of 
			//		LemonaideReportList. http://facebook.github.io/react/docs/multiple-component.html#dynamic-children
			
			//Need to filter nodes. 
			//	- Slice does not mutate the underlying array
			//	- Slice simply copies off the number of indices desired
			var filteredNodes = this.props.data.slice(1, this.state.reportsToShow);
			var reportNodes = filteredNodes.map(function(report) {
				var URL = [
					'fa-angellist',
					'fa-smile-o',
					'fa-thumbs-o-up'
				];

				var isOddReport = report.id % 2;

				var imageChoice = Math.round(Math.random()*2);
				var goodImage = URL[imageChoice];

				var isSelected = this.state.selected === report.id;

				return (
					<DI.App.LemonaideReport 
						key={report.id} 
						id={report.id}
						date={report.date} 
						quantity={report.quantity}
						netSale={report.netSale}
						costOfGoods={report.costOfGoods}
						isOddReport = {isOddReport}
						goodImage = {goodImage}
						isSelected = {isSelected}						
						onReportSelect = {this.handleReportSelected}>
					</DI.App.LemonaideReport>
				);
			}.bind(this));
			//Rendered HTML
			return (
				<section>
					<DI.App.LemonaideReportFilter 
						numberOfReports={this.props.numberOfReports} 
						onChangedFilterLimit = {this.handleChangedFilterLimit}/>
					<ul className="reportListing">{reportNodes}</ul>
				</section>
			)
		}
	});
})();