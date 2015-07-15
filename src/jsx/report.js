(function() {
	'use strict';

	DI.App.Report = React.createClass({
		/**
		 * Create image element to be rendered.
		 * @returns XML element to be rendered
		 */
		createImageElement: function() {
			//Holds image icon classes
			var imageClasses = 'fa ' + this.props.goodImage;

			//Image element to be rendered
			return <span className={ imageClasses }></span>;
		},
		/**
		 * Calculates if the reporting is profitable.
		 * @returns boolean of profitability
		 */
		isProfitable: function() {
			//Point at which we are no longer profitable
			var PROFITABLILTY_BREAK_POINT = 200;

			//Boolean signifying if the reporting period is profitable
			return this.props.grossProfit > PROFITABLILTY_BREAK_POINT;
		},
		/**
		 * React component lifecycle callback.
		 **/
		render: function() {
			//Image element to be rendered
			var image;

			//This Add-On will be deprecated in an upcoming React version
			// var cx = React.addons.classSet;
			// var classes = cx({
			// 	'report': true,
			// 	'odd': this.props.isOddReport
			// }); 

			//Alternate to React.addons.classSet
			//	dedupe.js
			//  https://github.com/JedWatson/classnames
			var classes = classNames({
				'report': true,
				'odd': this.props.isOddReport,
				'selected': this.props.isSelected				
			});

			//Using Moment JS for date formatting
			var date = moment(new Date(this.props.date)).format('MMM D, YYYY').toUpperCase();

			//Can't do if/else within JSX
			// - https://facebook.github.io/react/tips/if-else-in-JSX.html
			if (this.isProfitable()) {
				image = this.createImageElement()
			}

			return (
				//Directly calling parent handler with appropriate report id
				//  Using null as the first parameter because we only want to pass properties
				//  without using a context of "this"
				//  - Using "this" instead of "null" with throw warnings
				<li className={classes} onClick={this.props.onReportSelect.bind(null, this.props.id)}>
				<section>
					<header>{date}</header>
					<p>
						Quantity: {this.props.quantity}<br/>
						Net Profit: ${this.props.netSale}.00<br/>
						Cost of Goods: ${this.props.costOfGoods}.00<br/>
					</p>
					<footer>
						{image} ${this.props.grossProfit}.00
					</footer>
				</section>	
				</li>
			)
		}
	});
})();