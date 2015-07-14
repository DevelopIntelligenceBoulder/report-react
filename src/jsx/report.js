(function() {
	'use strict';

	DI.App.Report = React.createClass({
		/**
		 * Handle Click event handler
		 **/
		handleClick: function() {
			//Send request to server
			//	Sending up to the top component
			this.props.onReportSelect({
				id: this.props.id
			});
		},
		/**
		 * React component lifecycle callback.
		 **/
		render: function() {
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

			//Holds image icon classes
			var imageClasses ='';

			var PROFITABLILTY_BREAK_POINT = 200;

			var grossProfit = this.props.netSale - this.props.costOfGoods;
			//grossProfit > PROFITABLILTY_BREAK_POINT ? true : false
			var isProfitable = grossProfit > PROFITABLILTY_BREAK_POINT;
			var image;

			//Using Moment JS for date formatting
			var date = moment(new Date(this.props.date)).format('MMM D, YYYY').toUpperCase();

			//Can't do if/else within JSX
			// - https://facebook.github.io/react/tips/if-else-in-JSX.html
			if (isProfitable) {
				imageClasses = 'fa ' + this.props.goodImage;
				image = <span className={ imageClasses }></span>;
			}

			return (
				<li className={classes} onClick={this.handleClick}>
				<section>
					<header>{date}</header>
					<p>
						Quantity: {this.props.quantity}<br/>
						Net Profit: ${this.props.netSale}.00<br/>
						Cost of Goods: ${this.props.costOfGoods}.00<br/>
					</p>
					<footer>
						{image} ${grossProfit}.00
					</footer>
				</section>	
				</li>
			)
		}
	});
})();