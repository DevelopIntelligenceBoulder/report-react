(function() {
    'use strict';

    /**
     * Only render the top level components
     *  @param component: Header component
     *  @param element: Element to attach React's rendered elements to
     **/
    React.render(
        <DI.App.Header />,
        document.getElementById('header')
    );

    /**
     * Only render the top level component
     *	React will then handle rendering the children
     *  Data coming from a mockjax back-end
     *  @param component: Container with url- Hitting /data/sales
     *  @param element: Element to attach React's rendered elements to
     **/
    React.render(
        <DI.App.Container url='/data/sales' />,
        document.getElementById('app')
    );

})();