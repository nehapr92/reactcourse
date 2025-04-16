


import React from 'react';
import ReactDOM from 'react-dom/client';


const heading = React.createElement('h1', {id: 'heading'}, 'Hello World!');
const jsxHeading = <h1 id="heading">Hello World jsxHeading!</h1>;

// - What is the function of library ReactDOM? -
// ReactDOM is a library that provides DOM-specific methods to interact with the actual DOM.
const root = ReactDOM.createRoot(document.getElementById('root'));

// - What is render? -
// The render method takes the virtual DOM object (heading) and updates the real DOM to match it.
root.render(heading);
root.render(jsxHeading);