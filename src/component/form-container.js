(function() {
    'use strict';

    /**
     * Container Component is the top-level React component.
     **/
    DI.App.FormContainer = React.createClass({displayName: "FormContainer",
        /**
         *  Handle the expanding/collapsing of the report form.
         **/
        handleFormToggle: function() {
            this.setState({isFormCollapsed: !this.state.isFormCollapsed});
        },
        /**
         *  React component lifecycle callback.
         *    - Executes exactly once during the lifecycle of the
         *      component and sets the initial state of the component
         *    - Executes before the component has been drawn on screen
         **/
        getInitialState: function() {
            //Initially the form is collapsed
            return {
                isFormCollapsed: true
            };
        },
        /**
         * React component lifecycle callback.
         **/
        render: function() {
            //Rendered HTML
            return (
                React.createElement("div", null, 
                    React.createElement(DI.App.FormControl, {
                        onToggleControl: this.handleFormToggle, 
                        isFormCollapsed: this.state.isFormCollapsed}), 
                    React.createElement(DI.App.Form, {
                        onReportSubmit: this.props.onReportSubmit, 
                        isFormCollapsed: this.state.isFormCollapsed})
                )
            )
        }

    });

})();