/**
 * it accepts 3 params. 1. HTML tag 2. object containing attributes(props) 3. children
 * createElement() creates a react object which contains info about tags, props, children etc.
 * in render(), we are passing an react element object or JS object
 * it is responsible for converting that object into a DOM object and put it up in HTML screen.
 */

// const heading = React.createElement("h1", { id: "heading" }, "Hello World!!");
// console.log(heading);
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);

/**
 * <div id="parent">
 *      <div id="child">
 *          <h1>I am an h1 tag</h1>
 *      </div>
 * </div>
 */

// const parent = React.createElement(
//   "div",
//   { id: "parent" },
//   React.createElement(
//     "div",
//     { id: "child" },
//     React.createElement("h1", {}, "I am an h1 tag")
//   )
// );

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(parent);

/**
 * <div id="parent">
 *      <div id="child">
 *          <h1>I am an h1 tag</h1>
 *          <h2>I am an h2 tag</h2>
 *      </div>
 * </div>
 */

// Above HTML code in plain React

const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", { id: "first" }, "I am an h1 tag"),
    React.createElement("h2", { id: "second" }, "I am an h2 tag"),
  ])
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);

// test
