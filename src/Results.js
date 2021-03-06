import React from "react";
import Meaning from "./Meaning";
import Phonetics from "./Phonetics";
import "./Results.css";

export default function Results(props) {
if (props.results) {
  return (
    <div className="Results">
      <section className="Results">
      <h2 className="Results">{props.results.word}</h2>
      {props.results.phonetics.map(function(phonetic, index) {
     return (
       <div key={index}>
       <Phonetics phonetic={phonetic} />
       </div>
     );
    } )}
   </section>
    {props.results.meanings.map(function(meaning, index){
return (
<section key={index} className="Results"><Meaning meaning={meaning}/> </section>
);
})}

    </div>
  );
}  else { 
  return null;
}

}