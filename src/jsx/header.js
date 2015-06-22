(function() {
    'use strict';

    /**
     * Application Header Component is the top-level React component.
     **/
    DI.App.Header = React.createClass({
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
                <header>
                    <h1>Reporting <span className="sub-title">Ohh yeah it can be fun!</span>
			        </h1>
                    <time dateTime={this.state.dateTime}>{this.state.dateHuman}</time>
                </header>
            )
        }

    });

    /**
     * Only render the top level component
     *	React will then handle rendering the children
     *  Data coming from a back-end
     *  @param url: Hitting /data/sales
     *  @param element: Element to attach React's rendered elements to
     **/
    React.render(
        <DI.App.Header />,
        document.getElementById('header')
    );

})();