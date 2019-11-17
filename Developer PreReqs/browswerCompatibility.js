// important tools for addressing browser compatibility issues.

// 1) caniuse.com — A website that provides data on web browser compatibility for HTML, CSS, and JavaScript features. You will learn how to use it to look up ES6 feature support.
// 2) Babel — A Javascript library that you can use to convert new, unsupported JavaScript (ES6), into an older version (ES5) that is recognized by most modern browsers.




// ======================================================================== Babel

// Babel transpiles ES6 JavaScript to ES5.

// ==================== Transpilation is the process of converting one programming language to another.

// Before we can add Babel to our project directory, we need to run npm init. 
// The npm init command creates a package.json file in the root directory.

// A package.json file contains information about the current JavaScript project. Some of this information includes:

// Metadata — This includes a project title, description, authors, and more.
// A list of node packages required for the project — If another developer wants to run your project, 
// npm looks inside package.json and downloads the packages in this list.
// Key-value pairs for command line scripts — You can use npm to run these shorthand scripts to perform some process. 
// In a later exercise, we will add a script that runs Babel and transpiles ES6 to ES5.
// If you have Node installed on your computer, you can create a package.json file by typing npm init into the terminal.

// The terminal prompts you to fill in fields for the project’s metadata (name, description, etc.)

// You are not required to answer the prompts, though we recommend at minimum, you add your own title and description. 
// If you don’t want to fill in a field, you can press enter. npm will leave fill these fields with default values 
// or leave them empty when it creates the package.json file.


// 1.
// In the terminal window type:

// npm install babel-cli -D
// This installs one of the two required Babel packages.
// (Use npm with the -D flag to install the Babel command line package and add it to the devDependencies property in package.json.)

// 2.
// In the terminal window type:

// npm install babel-preset-env -D
// This installs the second of two required Babel packages.


// 3.
// In the terminal, type npm run build and press enter.

// You can view the ES5 code in ./lib/main.js.

// You may need to refresh to see the newly created lib directory.



// ======================================================================= .babelrc


// Now that you’ve downloaded the Babel packages, you need to specify the version of the source JavaScript code.

// You can specify the initial JavaScript version inside of a file named .babelrc. 
// In your root directory, you can run touch .babelrc to create this file.

// Inside .babelrc you need to define the preset for your source JavaScript file.
//  The preset specifies the version of your initial JavaScript file.

// Usually, you want to transpile JavaScript code from versions ES6 and later (ES6+) to ES5. 
// From this point on, we will refer to our source code as ES6+, because Ecma introduces new syntax with each new version of JavaScript.

// To specify that we are transpiling code from an ES6+ source, we have to add the following JavaScript object into .babelrc:
// `
// {
//     "presets": ["env"]
//   }
// `

// When you run Babel, it looks in .babelrc to determine the version of the initial JavaScript file. 
// In this case, ["env"] instructs Babel to transpile any code from versions ES6 and later.

// There’s one last step before we can transpile our code.
//  We need to specify a script in package.json that initiates the ES6+ to ES5 transpilation.

// Inside of the package.json file, there is a property named "scripts" that holds an object for specifying command line shortcuts.
//  It looks like this:

// `
// "scripts": {
//   "test": "echo \"Error: no test specified\" && exit 1"
// }, `

// In the code above, the "scripts" property contains an object with one property called "test". 
// Below the "test" property, we will add a script that runs Babel like this:

// `
// "scripts": {
//   "test": "echo \"Error: no test specified\" && exit 1",
//   "build": "babel src -d lib"
// }`

// In the "scripts" object above, we add a property called "build". 
// The property’s value, "babel src -d lib", is a command line method that transpiles ES6+ code to ES5.
// Let’s consider each argument in the method call:

// babel — The Babel command call responsible for transpiling code. The "npm run build" command will transpile all JavaScript files inside of the src folder.
// src — Instructs Babel to transpile all JavaScript code inside the src directory.
// -d — Instructs Babel to write the transpiled code to a directory.
// lib — Babel writes the transpiled code to a directory called lib.

