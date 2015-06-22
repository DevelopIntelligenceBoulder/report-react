(function() {
	'use strict';

	/**
	 * Form Component is the component in charge of the Report Form.
	 **/
	DI.App.Form = React.createClass({displayName: "Form",
		/**
		 * Clears out the form values.
		 **/
		clearForm: function() {
			React.findDOMNode(this.refs.reportDate).value = '';
			React.findDOMNode(this.refs.quantity).value = '';
			React.findDOMNode(this.refs.netSales).value = '';
			React.findDOMNode(this.refs.costOfGoods).value = '';
		},
		/**
		 * Handle Clear event handler.
		 **/
		handleClear: function() {
			this.clearForm();
		},
		/**
		 * Handle Submit event handler.
		 **/
		handleSubmit: function(event) {
			event.preventDefault();

			var reportDate = React.findDOMNode(this.refs.reportDate).value.trim();
			var quantity = React.findDOMNode(this.refs.quantity).value.trim();
			var netSales = React.findDOMNode(this.refs.netSales).value.trim();
			var costOfGoods = React.findDOMNode(this.refs.costOfGoods).value.trim();
			
			//Send request to server
			//	Sending up to the top component			
			this.props.onReportSubmit({
				date: reportDate,
				quantity: quantity,
				netSale: netSales,
				costOfGoods: costOfGoods
			});

			this.clearForm();

		},
		/**
		 * React component lifecycle callback.
		 **/
		render: function() {

			//Concatenating classes dynamically via dedupe
			var classes = classNames({
				'report-form ': true,
				'row': true,
				'collapsed': this.props.isFormCollapsed			
			});

			return (
				React.createElement("form", {
				 	className: classes, 
					noValidate: true, 
					onSubmit: this.handleSubmit}, 
					React.createElement("fieldset", null, React.createElement("legend", null, "Additional Report"), 
						React.createElement("label", {htmlFor: "reportDate"}, "Report Date:"), 
						React.createElement("input", {type: "text", 
							id: "reportDate", 
							placeholder: "Report Date (i.e. 01-01-2015)", 
							ref: "reportDate"}), 

						React.createElement("label", {htmlFor: "quantity"}, "Quantity:"), 
						React.createElement("input", {type: "text", 
							id: "quantity", 
							placeholder: "Quantity of Products Sold", 
							ref: "quantity"}), 

						React.createElement("label", {htmlFor: "netSales"}, "Net Sales:"), 
						React.createElement("input", {type: "text", 
							id: "netSales", 
							placeholder: "Net Sales", 
							ref: "netSales"}), 

						React.createElement("label", {htmlFor: "costOfGoods"}, "Cost of Goods:"), 
						React.createElement("input", {type: "text", 
							id: "costOfGoods", 
							placeholder: "Cost of Goods", 
							ref: "costOfGoods"}), 

						React.createElement("input", {type: "submit", 
							value: "Submit Report"}), 
						React.createElement("input", {type: "button", 
							onClick: this.handleClear, 
							value: "Clear"})
					)
				)
			)
		}
	});
})();