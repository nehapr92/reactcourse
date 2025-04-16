// - npm script in package.json for parcel - 
// "scripts": {
//     "start": "parcel index.html",
//     "build": "parcel build index.html"
// },
// The "scripts" section of the package.json file contains commands that can be run using npm (Node Package Manager).


// - "start": "parcel index.html ", - 
// This command starts a development server and opens the application in the default web browser. 
// It watches for changes in the source files and automatically reloads the page when changes are detected.

// - "build": "parcel build index.html",- 
// This command builds the application for production and outputs the files to the dist directory.
// It optimizes the code for performance and creates a single HTML file with all the necessary assets included.


// - How do i run this script? -
// npm start or npm run start - both works
// npm run build - to build the app for production


// - React element vs DOM element -
// React elements are lightweight representations of DOM elements and are objects that describe what the UI should look like at a given point in time.
// They are created using React.createElement() or JSX syntax and are used to describe what the UI should look like.
// React elements are immutable and cannot be changed once created. 
// They are used to create the virtual DOM, which is a lightweight copy of the actual DOM.
// The virtual DOM is used to optimize rendering performance by minimizing direct manipulation of the actual DOM.

// - React elements are not the same as DOM elements. -
// DOM elements are the actual elements that are rendered in the browser and can be manipulated using JavaScript.
// DOM elements are mutable and can be changed at any time. They are created using the document.createElement() method or by using HTML markup in the browser.  


import React from 'react';
import ReactDOM from 'react-dom/client';

// - Issue with React.createElement? - 
// React.createElement is a method that creates a virtual DOM element.
// It takes three arguments: the type of element to create (e.g., 'h1'), an object representing the properties of the element (e.g., {id: 'heading'}), and the content of the element (e.g., 'Hello World!').
// It returns a JavaScript object that React uses internally to render the UI.
// React.createElement is used to create elements without using JSX syntax.
const heading = React.createElement('h1', {id: 'heading'}, 'Hello World!');

// - Alternative to React.createElement? -
// JSX is an alternative syntax to React.createElement that allows you to write HTML-like code in your JavaScript files.
// It is a syntax extension for JavaScript that looks similar to HTML and is used with React to describe what the UI should look like.
// JSX is transformed into React.createElement calls by a compiler (like Babel) before being rendered in the browser.

//  - Write JSX instead of React.createElement? -
// JSX is not HTML, but it looks similar to HTML.
// JSX are javascript expressions that return React elements.
const jsxHeading = <h1 id="heading">Hello World jsxHeading!</h1>;

// - What is the function of library ReactDOM? -
// ReactDOM is a library that provides DOM-specific methods to interact with the actual DOM.
const root = ReactDOM.createRoot(document.getElementById('root'));

// - What is render? -
// The render method takes the virtual DOM object (heading) and updates the real DOM to match it.
root.render(heading);
root.render(jsxHeading);

// - Will JS Engine understand JSX? -
// No, the JavaScript engine will not understand JSX.
// JSX is a syntax extension for JavaScript that looks similar to HTML, but it is not valid JavaScript.
// JSX needs to be transformed into valid JavaScript code before it can be executed by the JavaScript engine.
// This transformation process is called "transpilation".
// The transpiled code will use React.createElement to create the virtual DOM elements.
// The transpiled code will look something like this:

// - Is Babel being used inside Parcel?
// Yes, Parcel uses Babel internally to transpile JSX and modern JavaScript syntax into code that is compatible with older browsers.

// - What is Babel? -
// Babel is a JavaScript compiler that allows you to use the latest JavaScript features and syntax in your code.
// It transpiles modern JavaScript code into a version that is compatible with older browsers.
// Babel can also transpile JSX syntax into regular JavaScript code that can be understood by the JavaScript engine.
// Babel is often used in conjunction with React to allow developers to write JSX syntax in their React components.

// - Can we use JSX without Babel? -
// No, we cannot use JSX without Babel or a similar transpiler.


// - Give few syntax difference between JSX and HTML ? -
// 1. Class vs className: In JSX, the "class" attribute is replaced with "className" to avoid conflicts with the JavaScript keyword "class".
// For example <div class="container"> in HTML becomes <div className="container"> in JSX.
// 2. Style: In JSX, the "style" attribute is an object with camelCase properties instead of a string. 
// For example, <div style="color: red;"> in HTML becomes <div style={{ color: 'red' }}> in JSX.
// 3. Self-closing tags: In JSX, all tags must be closed, even if they are self-closing.
// For example, <img src="image.jpg" /> in JSX is valid, while <img src="image.jpg"> is invalid in JSX.
// 4. JavaScript expressions: In JSX, you can embed JavaScript expressions inside curly braces {}.
// For example, <h1>{'Hello World!'}</h1> in JSX will render "Hello World!".
// In HTML, you cannot embed JavaScript expressions directly.
// 5. Comments: In JSX, comments are written inside curly braces and use the JavaScript comment syntax.
// For example, {/* This is a comment */} in JSX. In HTML, comments are written as <!-- This is a comment -->.