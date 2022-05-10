import React from "react";

export default function Examples(props) {
console.log(props.examples);
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
