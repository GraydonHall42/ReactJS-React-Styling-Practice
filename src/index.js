//Create a React app from scratch.
//Show a single h1 that says "Good morning" if between midnight and 12PM.
//or "Good Afternoon" if between 12PM and 6PM.
//or "Good evening" if between 6PM and midnight.
//Apply the "heading" style in the styles.css
//Dynamically change the color of the h1 using inline css styles.
//Morning = red, Afternoon = green, Night = blue.

import React from "react";
import ReactDOM from "react-dom";

var hour = new Date().getHours();
console.log(hour);

let greeting = "Hi!";
let colorString = "Black";

if (hour > 0 && hour < 12) {
  greeting = "Good Morning";
  colorString = "red";
} else if (hour >= 12 && hour < 18) {
  greeting = "Good Afternoon";
  colorString = "green";
} else {
  greeting = "Good Evening";
  colorString = "blue";
}

ReactDOM.render(
  <h1 className="heading" style={{ color: colorString }}>
    {greeting}
  </h1>,
  document.getElementById("root")
);
