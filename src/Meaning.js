import React from "react";
import './Meaning.css';

export default function Meaning(props) { 
console.log(props.meaning);
return (
  <div className="Meaning shadow">
    <h4>{props.meaning.partOfSpeech}</h4> 
{props.meaning.definitions.map(function(definition, index) {
  return (
    <div key={index}>
<p>{definition.definition} </p>
<em>{definition.example}</em>
</div>
);
})}
     </div>
);
}