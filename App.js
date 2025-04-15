        // Create a virtual DOM element representing an <h1> tag with the text "Hello World!"
        // React.createElement(...) is how React creates a virtual DOM object manually, without using JSX syntax.
        // It returns a JavaScript object that React uses internally to render the UI.
        const heading1 = React.createElement('h1', {id: 'heading'}, 'Hello World!');
        const heading2 = React.createElement('h1', {id: 'heading2'}, 'Hello World2!');

        // Create a parent <div> element that contains the two <h1> elements
        // The first argument is the type of element to create ('div' in this case).
        // The second argument is an object containing properties for the <div> element.
        // The third argument is an array of child elements to be rendered inside the <div>.
        const parentDiv = React.createElement('div', {id: 'parent'}, [heading1, heading2]);

        // The above code creates a virtual DOM structure that looks like this:

        // <div id="parent">
        //     <h1 id="heading">Hello World!</h1>
        //     <h1 id="heading2">Hello World2!</h1>
        // </div>

        // Initialize a React root in the <div id="root"></div> container
        // This is where the React application will be rendered in the real DOM.
        // The ReactDOM.createRoot method is used to create a root for the React application.
        const root = ReactDOM.createRoot(document.getElementById('root'));

        // Render the virtual DOM element into the real DOM
        root.render(parentDiv);

        // The render method takes the virtual DOM object (parentDiv) and updates the real DOM to match it.
        // This is how React efficiently updates the UI by only changing the parts of the DOM that need to be updated.
        // React will compare the virtual DOM with the real DOM and make the necessary changes to keep them in sync.
        // This process is known as reconciliation.
        // React uses a diffing algorithm to determine what has changed and updates only those parts of the DOM.
        // This makes React very efficient and fast when rendering large applications.


