import React from 'react';
import ReactDOM from 'react-dom/client';


const heading1 = React.createElement('h1', {id: 'heading'}, 'Hello World!');
const heading2 = React.createElement('h1', {id: 'heading2'}, 'Hello World2!');

const parentDiv = React.createElement('div', {id: 'parent'}, [heading1, heading2]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(parentDiv);