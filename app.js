/**
 * it accepts 3 params. 1. HTML tag 2. object containing attributes(props) 3. children
 * createElement() creates a react object which contains info about tags, props, children etc.
 * This object is get converted into HTML browser
 * Props is a collection of Tags, attributes, children.
 * in render(), we are passing an react element object or JS object
 * it is responsible for converting that object into a DOM object and put it up in HTML screen.
 */

/**
 * Package.json is the configuration for NPM
 * It Keeps track of all the version of the packages that are installed
 */

/**
 * Package.lock.json keeps track of the exact version of the package that is installed
 */

/**
 * Installed Parcel, but why node_modules has lot of folders ?
 * beacuse parcel has dependency, and those dependencies can have other dependencies.
 * so it downloades all and folder grows.
 */

/**
 * npx parcel index.html
 * npx ---> it will execute the package (here PARCEL)
 * npm parcel index.html --- dev build
 * npm parcel build index.html --- prod build
 */

/**
 * <div id="parent">
 *      <div id="child">
 *          <h1>I am an h1 tag</h1>
 *          <h2>I am an h2 tag</h2>
 *      </div>
 * </div>
 */

/**
 * type=module tells the browser to not treat the JS file as a regular JS file
 * since JS file has import/export command
 */

// Above HTML code in plain React

import React from "react";
import ReactDOM from "react-dom/client";

const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", { id: "first" }, "I am an h1 tag"),
    React.createElement("h2", { id: "second" }, "I am an h2 tag"),
  ])
);
console.log(parent);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
