/*

- git repro push

- npm - npm init
Think of npm like the App Store, but for JavaScript developers.
// It helps you find, install, and manage packages (libraries) that you can use in your projects.

- package.json - this gets created with npm init
// It’s like a blueprint for your project, listing all the packages you need and their versions.
// It’s like a recipe card for your project, telling you what ingredients (packages) you need and how to use them.
// It also includes metadata about your project, like its name, version, and description.


- dependencies. 
- dev dependencies 
- normal dependencies

- parcel (bundler- dev dependencies) 
// Parcel is a tool that helps you bundle your JavaScript code and other assets (like CSS and images) into a single file (or a few files) that can be easily served to the browser.
// It’s like a magic box that takes all your code and packages it up nicely so the browser can understand it.
It takes all your source files (HTML, JS, CSS, images) and bundles them together so that the browser can load them efficiently.
If you think of your code like raw ingredients, Parcel is the chef that preps and plates it all nicely for the browser.

- caret and tilde 
// The caret (^) and tilde (~) are symbols used in package.json to specify version ranges for your dependencies.
// They help you control which versions of a package your project can use.
// caret (^) - allows minor updates (e.g., 1.2.3 to 1.3.0) but not major updates (e.g., 1.2.3 to 2.0.0). It’s like saying, “I’m okay with small changes, but don’t give me a whole new version.”
// tilde (~) - allows patch updates (e.g., 1.2.3 to 1.2.4) but not minor or major updates (e.g., 1.2.3 to 1.3.0 or 2.0.0). It’s like saying, “I’m only okay with tiny fixes, nothing more.”

- package-lock.json - keep track/reccord of exact version of dependencies, 
// It’s like a grocery receipt that shows exactly what you bought and how much you paid for it.
// It’s automatically generated when you install packages and helps ensure that everyone working on the project uses the same versions of dependencies.
// It locks down the versions of your dependencies to ensure that everyone working on the project has the same setup.
Think of package.json as the recipe, and package-lock.json as the grocery receipt — showing exactly what versions you bought.

node-modules
// This is where all the packages (libraries) you installed are stored.
// It’s like a pantry where all your ingredients are kept, ready to be used in your project.
// You don’t need to worry about this folder too much, just know that it’s where all the magic happens.
// It contains all the code and files for the packages you installed, and it’s automatically managed by npm.
// You don’t need to touch this folder directly; npm takes care of it for you.
// do we need to push this to git?
// No, you don’t need to push the node_modules folder to git. It’s usually ignored in version control because it can be very large and can be recreated using the package.json and package-lock.json files.
// Instead, you should add a .gitignore file to your project and include node_modules in it. This way, git will ignore the node_modules folder when you push your code to the repository.
// This is a common practice in the JavaScript community to keep repositories clean and lightweight.

babel
// Babel is a tool that helps you write modern JavaScript code that can run in older browsers.
// It’s like a translator that takes your fancy new JavaScript and converts it into a version that older browsers can understand.
// It allows you to use the latest JavaScript features without worrying about whether they’ll work in all browsers.

difference between parcel, webpack ?
// Parcel is a bundler that takes your code and packages it up nicely for the browser. It’s easy to use and requires minimal configuration.
// Webpack is also a bundler, but it’s more powerful and flexible. It allows you to customize how your code is bundled and can handle more complex projects. It requires more configuration than Parcel.
// Think of Parcel as a simple, user-friendly bundler that gets the job done quickly, while Webpack is like a Swiss Army knife that can do a lot of things but requires more setup and knowledge to use effectively.
// If you’re just starting out, Parcel is a great choice because it’s easy to use and gets you up and running quickly. If you need more control and customization, Webpack is a powerful option.

npx parcel index.html
// This command runs Parcel and tells it to bundle the index.html file.
// It’s like saying, “Hey Parcel, take this HTML file and package it up for me!”
// Parcel will look at the HTML file, find all the JavaScript and CSS files it needs to include, and bundle them together into a single file (or a few files) that can be served to the browser.
// It will also start a local development server so you can see your project in action in the browser.

Alternative way ?
// You can also use npm scripts to run Parcel. In your package.json file, you can add a script like this:
// "scripts": {
//   "start": "parcel index.html"
// }
// Then, you can run npm start in the terminal, and it will execute the command associated with the "start" script, which in this case is parcel index.html.
// This is a common way to run build tools and scripts in JavaScript projects, as it allows you to define custom commands and make it easier for others to run your project.


difference between npm and npx ?
// npm is a package manager that helps you install and manage packages (libraries) for your project. It’s like a store where you can find and buy packages to use in your code.
// You use npm to install packages, update them, and manage their versions.
// For example, you can run npm install <package-name> to install a package.

// npx is a tool that comes with npm and allows you to run packages without installing them globally. It’s like a delivery service that brings you a package right when you need it, without having to keep it in your pantry (your global npm packages).
// You can use npx to run a package directly from the command line without installing it first. For example, you can run npx parcel index.html to start Parcel without having to install it globally first.

what will happen if we run npm parcel index.html?
// If you run npm parcel index.html, it will not work because npm is not designed to run packages directly like that. Instead, you should use npx to run Parcel directly from the command line.

what will happen if i run npm start ?
// If you have a script defined in your package.json file like this:
// "scripts": {
//   "start": "parcel index.html"
// }
// Then running npm start will execute the command associated with the "start" script, which in this case is parcel index.html.

npm start or npx start ?
// You should use npm start. The npm start command looks for a script named "start" in your package.json file and executes it.
// npx is used to run packages directly without installing them, but npm start is specifically designed to run scripts defined in your package.json file.


fetching react from cdn or npm install react ?
// You can use either method to include React in your project.
// If you want to quickly prototype something or don’t need to manage versions, using a CDN (like the one in your HTML file) is fine.
// It’s like borrowing a book from the library for a quick read.
// You can just include the script tags in your HTML file and start using React right away.
// This is great for small projects or demos.

// However, if you’re building a larger application or want to manage your dependencies more carefully, it’s better to use npm to install React.
// This way, you can control the version of React you’re using and easily update it when needed.
// It’s like buying your own copy of the book so you can keep it for as long as you want and make notes in it.
// You can also use npm to install other packages and manage your project’s dependencies more effectively.
// This is the recommended approach for most projects, especially if you’re using a build tool like Parcel or Webpack.


Parcel
// Parcel is a tool that helps you bundle your JavaScript code and other assets (like CSS and images) into a single file (or a few files) that can be easily served to the browser.
// Important points about Parcel:
// 1. Zero Configuration: Parcel is designed to work out of the box with minimal configuration. You can start using it without having to set up a complex configuration file.
// 2. Fast Build Times: Parcel uses a parallel processing model to speed up the build process. It can handle large projects efficiently.
// 3. Hot Module Replacement (HMR): Parcel supports HMR, which allows you to see changes in your code immediately without refreshing the browser. This is great for development.
// 4. Asset Management: Parcel can automatically handle different types of assets (like images, CSS, and JavaScript) and optimize them for production.
// 5. Built-in Support for Modern JavaScript: Parcel supports modern JavaScript features (like ES6 modules) without needing additional configuration or plugins.
// 6. Easy to Use: Parcel is user-friendly and has a simple command-line interface. You can run it with just a few commands, making it accessible for beginners and experienced developers alike.

.parcel-cache
// This folder is created by Parcel to store cached files and speed up the build process. It helps Parcel avoid reprocessing files that haven’t changed, making builds faster.
// You don’t need to worry about this folder; Parcel manages it automatically. It’s like a storage room where Parcel keeps things it might need later to speed up the process.
// You can safely ignore this folder in version control (like git) because it’s automatically generated and not necessary for your project to run.
// It’s a good practice to add it to your .gitignore file so it doesn’t clutter your repository.

// production build using parcel
// To create a production build using Parcel, you can run the following command in your terminal:
// npx parcel build index.html --dist-dir build
// This command tells Parcel to bundle your project for production and output the files to a directory named "build".
// The --dist-dir option specifies the output directory for the production build. You can change "build" to any name you prefer.
// Parcel will optimize your code, minify it, and create a set of files that are ready to be deployed to a web server.


why my react app is fast due to bundling?
// Bundling is the process of combining multiple JavaScript files into a single file (or a few files) that can be loaded by the browser. This has several benefits that make your React app faster:
// 1. Fewer HTTP Requests: When you bundle your JavaScript files, the browser has to make fewer requests to the server. Instead of loading multiple files separately, it can load one or a few bundled files. This reduces latency and speeds up page loading times.
// 2. Minification: Bundlers like Parcel can also minify your code, which means they remove unnecessary characters (like spaces and comments) to make the file size smaller. Smaller files load faster in the browser.
// 3. Code Splitting: Some bundlers support code splitting, which allows you to load only the parts of your code that are needed for a specific page or feature. This means that users don’t have to download the entire application at once, making it faster to load and interact with the app.
// 4. Caching: Bundled files can be cached by the browser, which means that once they are loaded, the browser can store them and use them for future visits. This reduces loading times for returning users.
// 5. Optimized Loading: Bundlers can optimize the loading order of your files, ensuring that critical resources are loaded first, improving the perceived performance of your app.
// 6. Tree Shaking: Bundlers can also remove unused code from your application, which reduces the size of the final bundle and improves performance. This is especially useful in large applications with many dependencies.
// 7. HMR (Hot Module Replacement): Some bundlers support HMR, which allows you to update your code without refreshing the entire page. This speeds up development and improves the overall experience for developers.
// // Overall, bundling helps reduce the number of files the browser has to load, minimizes file sizes, and optimizes the loading process, all of which contribute to a faster React app.

*/

import React from 'react';
import ReactDOM from 'react-dom/client';


const heading1 = React.createElement('h1', {id: 'heading'}, 'Hello World!');
const heading2 = React.createElement('h1', {id: 'heading2'}, 'Hello World2!');

const parentDiv = React.createElement('div', {id: 'parent'}, [heading1, heading2]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(parentDiv);

