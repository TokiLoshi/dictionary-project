import React from "react";

export default function Examples(props) {

  if (props.examples) {
    return(
      <div>
        <span><strong>Example:</strong>
        <br /> {props.examples}</span>
      </div>
    )
  } else {
    return null;
  }
}
