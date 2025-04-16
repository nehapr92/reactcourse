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


// - Functional Component -
// A function component is a JavaScript function that returns JSX elements.
// example of a function component:
// function Welcome(props) {
//     return <h1>Hello, {props.name}!</h1>;
// }
// Arrow function component -
// An arrow function component is a function component defined using an arrow function syntax.
// example of an arrow function component:
// const Welcome = (props) => {
//     return <h1>Hello, {props.name}!</h1>;
// }

// Difference between function component and JSX Element -
// A function component is a reusable piece of code that can accept props and return JSX elements.
// Syntax difference -
// A function component is defined using the function keyword or arrow function syntax, while a JSX element is created using the JSX syntax.
// A function component can accept props and can have state, while a JSX element cannot accept props or have state.
// A function component can be reused multiple times with different props, while a JSX element is a single instance of a component.
// A function component can have lifecycle methods, while a JSX element does not have lifecycle methods.


const HeadingFC1 = () => (
    <h1 id="heading2">Hello World heading2!</h1>
);

const HeadingFC2 = () => {
   return <h1 id="heading3">Hello World heading3!</h1>
};

root.render(<HeadingFC1 />);
root.render(<HeadingFC2 />);

// - convert react element to functional component -
// A React element can be converted to a functional component by wrapping it in a function that returns the element.
// For example, if we have a React element like this:
// const element = <h1>Hello World!</h1>;   
// We can convert it to a functional component like this:
const MyComponent = () => {
    return element
};



// Syntax for function components -
//() => <h1>Hello</h1> | ✅ | Works if JSX is on the same line
//() => (<h1>Hello</h1>) | ✅ | Best practice — always use parens
//() => { return <h1>Hello</h1>; } | ✅ | Explicit return
//() => { <h1>Hello</h1>; } | ❌ | No return statement = undefined


// - diference between JSX element and react element -
// A React element is an object representation of a DOM element created using React.createElement() or JSX syntax.
// A JSX element is a syntactic sugar for creating React elements using JSX syntax.
// JSX elements are transformed into React elements by a compiler (like Babel) before being rendered in the browser.


// - Difference in render method for react element and functional component -
// The render method for a React element takes the virtual DOM object (React element) and updates the real DOM to match it.
// The render method for a functional component takes the component function and calls it to get the React element, which is then rendered to the DOM.
// eg
root.render(<MyComponent />); // Renders the functional component
root.render(heading); // Renders the React element
root.render(jsxHeading); // Renders the JSX element


//Data wrapped in curly braces is called a JavaScript expression.
// Sanitizes the data and prevents XSS attacks.
// XSS attacks are a type of security vulnerability that allows attackers to inject malicious scripts into web pages viewed by other users.
// This can lead to unauthorized access to sensitive data, session hijacking, and other security issues.
// React automatically escapes any values embedded in JSX curly braces to prevent XSS attacks.


// - Call functional component inside another functional component -
// You can call a functional component inside another functional component by simply using the component name as a tag.
// For example, if you have a functional component called MyComponent, you can call it inside another functional component like this:
const ParentComponent1 = () => {
    return (
        <div>
            <h1>Parent Component</h1>        
            <MyComponent /> // Calling the child component
        </div>   
    );
};
// This will render the ParentComponent along with the MyComponent inside it.

// Another way to call a functional component inside another functional component is by using the function name directly without the JSX syntax.
// For example:
const ParentComponent2 = () => {

    return (
        <div>
            <h1>Parent Component</h1>
            {MyComponent()} // Calling the child component without JSX syntax    
            <MyComponent></MyComponent> // Calling the child component with JSX syntax
            <MyComponent /> // Calling the child component with JSX syntax
        </div>
    );
};
// This will also render the ParentComponent along with the MyComponent inside it.