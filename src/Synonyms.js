import React from "react";

export default function Synonyms(props) {

if (props.synonyms) {
  return (
    <div className="Synonyms">
   <span><strong>Synonyms: </strong></span>
   <br />
{props.synonyms.map(function (synonym, index) {
    return (
      <div className="d-inline">
        <span key={index}> {" "} <em>
        {synonym}</em>, {" "}
        </span>
        </div>
        ) 
      })}
      </div>
      );
  } else {
    return null;
  }
}