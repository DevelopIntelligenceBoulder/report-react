(function() {
    'use strict';

    /**
     * Application Header Component is the top-level React component.
     **/
    DI.App.Header = React.createClass({displayName: "Header",
        getInitialState: function() {
            //Creating today's timestamp
            var date = new Date();

            //Using Moment JS for date formatting
            var dateHuman = moment(date).format('MMMM DD, YYYY');
            var dateTime = moment(date).format('YYYY-MM-DD');

            //Setting the initial state of this component
            return {
                dateHuman: dateHuman,
                dateTime: dateTime
            };
        },
        /**
         * React component lifecycle callback.
         **/
        render: function() {
            //Rendered HTML
            return (
                React.createElement("header", {className: "title"}, 
                    React.createElement("h1", null, "Reporting ", React.createElement("span", {className: "sub-title"}, "Ohh yeah it can be fun!")
			        ), 
                    React.createElement("time", {dateTime: this.state.dateTime}, this.state.dateHuman)
                )
            )
        }

    });

})();