/**
 *
 * <div id="parent">
 *   <div id="child">
 *     <h1>I am an H1 tag!</h1>
 *     <h2>I am an H2 tag!</h1>
 *   </div>
 * <div id="child2">
 *     <h1>I am an H1 tag!</h1>
 *     <h2>I am an H2 tag!</h1>
 *   </div>
 * </div
 *
 * ReactElement(Object) => HTML(Browser understands)
 * */

// const parent = React.createElement("div", { id: "parent" },
//     React.createElement("div", { id: "child" },
//         // React.createElement("h1", {}, "I am an H1 tag!")));
//         [React.createElement("h1", {}, "I am an H1 tag!"), React.createElement("h2", {}, "I am an H2 tag!")]
//     ));

// import React from "react";
// import ReactDOM from "react-dom/client";
// const parent = React.createElement("div", { id: "parent" },
//     [
//         React.createElement("div", { id: "child" },
//             // React.createElement("h1", {}, "I am an H1 tag!")));
//             [React.createElement("h1", {}, "This is React Course"), React.createElement("h2", {}, "Learn React from Scratch")]
//         ), React.createElement("div", { id: "child2" },
//             // React.createElement("h1", {}, "I am an H1 tag!")));
//             [React.createElement("h1", {}, "I am an H1 tag!"), React.createElement("h2", {}, "I am an H2 tag!")]
//         )
//     ]
// );

// // Above code is untidy that's why we can use JSX

// // const heading = React.createElement("h1", { id: "heading", xyz: "abc " }, "Welcome to the React World!");

// // console.log(heading);
// console.log(parent);

// // const root = ReactDOM.createRoot(document.getElementById("root"));
// const root = ReactDOM.createRoot(document.getElementById("header"));
// // root.render(heading);
// root.render(parent);

// import React from "react";
// import ReactDOM from "react-dom/client";

// /**
//  * Header
//  *  - Logo
//  *  - Nav Items
//  * Body
//  *  - Search
//  *  - RestaurantContainer
//  *   - RestaurantCard
//  * Footer
//  *  - Copyright
//  *  - Links
//  *  - Address
//  *  - Contact
//  */

// // React.creatElement => ReactElement-Object => HTMLElement(render)
// // const heading = React.createElement("h1",  { id: "heading"}, "Welcome to the React World!");
// // console.log(heading);

// // JSX - is no HTML in JavaScript   HTML-like or XML-like syntax
// // JSX (transpiled before it reaches the browser) transpiled by - Parcel - babel - webpack
// // JSX => React.createElement => ReactElement-JS Object => HTMLElement(render)
// // const jsxHeading = <h1 id="heading" className="head" tabIndex="1">Welcome to the React World!</h1>
// // console.log(jsxHeading);
// // React Element - Object
// // const heading = (
// //   <h1 id="heading" className="head" tabIndex="1">
// //     Welcome to the React World!
// //   </h1>
// // );

// // React Component
// // Class Based Component - OLD
// // Functional Component - NEW

// // React Functional Component
// // const Heading = () => {
// //     return (<h1 id="heading" className="head" tabIndex="1">React Functional Component</h1>);
// // }

// // Title component

// const elem = (<span> React Element</span>)
// // React element
// const title = (
//   <h1 id="heaing" className="head" tabIndex="1">
//     Welcome to React
//     {elem}
//   </h1>
// );
// // Using function keyword
// // const Title = function() {
// //     return (<h1 id="heaing" className="head" tabIndex="1">
// //         React using JSX
// //     </h1>);
// // }
// // Using arrow syntax
// // const Title = () => (
// //     <h1 id="heading" className="head" tabIndex="1">
// //       React using JSX
// //     </h1>
// // );

// // const number = 70000;

// // Component Composition
// const Heading2 = () => (
//   <div id="container">
//     {/* <Title /> */}
//     {title}
//     <h2>{200 + 300}</h2>
//     <h1 id="heading" className="head" tabIndex="1">
//       React Functional Component
//     </h1>
//   </div>
// );

// const root = ReactDOM.createRoot(document.getElementById("root"));

// // root.render(heading);
// // root.render(jsxHeading);
// // root.render(heading);
// root.render(<Heading2 />);

import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";

// /**
//  * Header
//  *  - Logo
//  *  - Nav Items
//  * Body
//  *  - Search
//  *  - RestaurantContainer
//  *   - RestaurantCard
//  *    - Name of the Restaurant, Star Rating, Cuisine, Delivery Time
//  * Footer
//  *  - Copyright
//  *  - Links
//  *  - Address
//  *  - Contact
//  */

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
      {/* // Header
            // Body
            // Footer */}
    </div>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
