/**
 *  <div id="parent">
 *      <div id="child">
 *          <h1>I am an h1 tag</h1>
 *          <h2>I am an h2 tag</h2>
 *      </div>
 * </div>
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
