import React from "react";

export default function Synonyms(props) {

if (props.synonyms) {
  return (
    <div className="Synonyms">
   <span><strong>Synonyms: </strong></span>
{props.synonyms.map(function (synonym, index) {
    return (
        <span key={index}> {" "} <em>
        {synonym}</em> {" "}
        </span>
        ); 
})}
      </div>
      );
  } else {
    return null

  }
}