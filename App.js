import React from "react";
import  ReactDOM  from "react-dom/client";

// const heading=React.createElement("h1",
// {id:"heading",xyz:"xyz"},
// "Hello world from React!");
// const root=ReactDOM.createRoot(document.getElementById("root"));
// console.log(heading);//object
// //console.log(root)
// root.render(heading);


/*
   <div id="parent">
       <div id="child"> 
         <h1>I m h1 tag!</h1>
       </div>
   </div>
Render helps us to put object into pages
ReactElement(object)=>HTML(Browser Understands)

*/

const parent=React.createElement("div",
{id:"parent"},[React.createElement("div",{id:"child1"},
[React.createElement("h1",{},"I m h1 tag"),React.createElement("h2",{},"I m h2 tag")],React.createElement("div",{id:"child2"},
[React.createElement("h1",{},"I m h1 tag"),React.createElement("h2",{},"I m h2 tag")]))
]);
console.log(parent);
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);