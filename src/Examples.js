import React from "react";

export default function Examples(props) {

  if (props.examples) {
    return(
      <div>
        <span><strong>Example:</strong> {props.examples}</span>
      </div>
    )
  } else {
    return null;
  }
}
