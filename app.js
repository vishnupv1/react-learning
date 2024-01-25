import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement("h1", {}, "React is here at browser");
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
// heading.innerHTML = "Name : Vishnu P V";
// const root = document.getElementById("root");
// root.appendChild(heading);
