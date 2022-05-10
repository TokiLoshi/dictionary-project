import React from "react";

export default function Phonetics(props) {
  function playAudio(){
    let audio = new Audio(props.phonetic.audio);
return (
  audio.play()
);
  }
if (props.phonetic.audio) {
  return (
    <div>
      <h4>{props.phonetic.text}</h4>
      <button className="phoneticButton btn btn-dark p-2 m-3" aria-label="listen" onClick={playAudio} >Click to listen</button>
    </div>
  );
} else {
  return (
    <div>
      <h4>{props.phonetic.text}</h4>
    </div>
  )
}}
