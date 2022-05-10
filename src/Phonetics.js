import React from "react";
import "./Phonetics.css";

export default function Phonetics(props) {
  function playAudio(){
    let audio = new Audio(props.phonetic.audio);
return (
  audio.play()
);
  }
if (props.phonetic.audio) {
  return (
    <div className="Phonetics">
      <h4 className="Phonetics">{props.phonetic.text}</h4>
      {/* <button className="phoneticButton btn btn-dark p-2 m-3" aria-label="listen" onClick={playAudio} >Click to listen</button> */}
      <i className="fa-solid fa-circle-play m-2 ps-2" aria-label="listen" onClick={playAudio}></i>
    </div>
  );
} else {
  return (
    <div className="Phonetics">
      <h4>{props.phonetic.text}</h4>
    </div>
  )
}}
