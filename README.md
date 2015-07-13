# report-react
An example of how to write a simple reporting tool in React.

## Lost?
Start with a look at a [Plain React Hello World](https://github.com/DevelopIntelligenceBoulder/hello-react) and a [React Hello World utilizing JSX](https://github.com/DevelopIntelligenceBoulder/hello-react-jsx).

## Instructions
1. Install [NodeJS](https://nodejs.org/)
2. Run `npm start` to get the application running on the web server
    * Packages needed for this application will be installed (i.e. React, jQuery, jQuery Mockjax, Classnames, Moment and Express)
    * The Node/Express Web Server will start
4. Go to `http://localhost:8080/src` in your web browser

## Don't forget!
If you are going to change any of the [JSX](https://jsx.github.io/) files they will need to be compiled into Plain Old JavaScript for React to consume.

### The compilation can be done via the JSX compiler:
1. Download and install the JSX compiler via the `react-tools`
    * npm install -g react-tools
    * Allows the compiler to be used via `jsx` within a command-line
2. Utilize the JSX watch utility from a command-line
    * jsx --watch jsx/ component/
    * The JSX compiler will compile the JSX code into JavaScript the React will consume
    * The first parameter `jsx/` is where the JavaScript utilizing JSX is written
    * The second parameter `component/` is where the compiled JavaScript will be placed