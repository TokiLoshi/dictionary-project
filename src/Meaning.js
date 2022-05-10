import React from "react";
import './Meaning.css';
import Synonyms from "./Synonyms";
import Examples from "./Examples";

export default function Meaning(props) { 

return (
  <div className="Meaning shadow">
    <h3>{props.meaning.partOfSpeech}</h3> 

{props.meaning.definitions.map(function (definition, index) {

  return (
    <div key={index}>
<p>
<br />
<strong>Definition:</strong> {definition.definition} 
</p>
<Examples examples={definition.example} />
<br />
<Synonyms synonyms={props.meaning.synonyms}/>
</div>
  );

})}
</div>
);
}