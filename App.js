import React from "react";
import  ReactDOM  from "react-dom/client";
//React.createElement=>React Element(JS Object)=>HTMLElement(render)
const heading=React.createElement("h1",{id:"heading"},"Namaste React");
const root=ReactDOM.createRoot(document.getElementById("root"));
//jsx is HTML like sytax which makes easier to create React Element
//jsx not HTML in JS
//jsx (transpiled before it reaches the JS engine)-PARCEL- Babel(converting jsx in react code)

//JSX=>React.createElement=>React Element(js object)=>HTMLElement(while rendering)
const jsxheading=(
    <h1 id="heading">Namaste React using JSX</h1>
);

root.render(heading);
