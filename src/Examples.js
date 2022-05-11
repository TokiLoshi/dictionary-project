import React from "react";
import "./Examples.css";

export default function Examples(props) {

  if (props.examples) {
    return(
      <div>
        <span className="Examples"><em>Example: {props.examples}</em></span>
      </div>
    )
  } else {
    return null;
  }
}
