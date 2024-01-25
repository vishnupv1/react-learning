import React from "react";
import ReactDOM from "react-dom";

const heading = React.createElement("h1", {}, "React is here");
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
// heading.innerHTML = "Name : Vishnu P V";
// const root = document.getElementById("root");
// root.appendChild(heading);
