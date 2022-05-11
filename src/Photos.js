import React from "react";
import "./Photos.css";

export default function Photos(props) {
  console.log(props.photos);
  if (props.photos) {
  return (
    <div className="Photos shadow">
      <div className="row">
    {props.photos.map(function(photo, index) {
    return (
     
      <div className="col-4" key={index} >
        <a href={photo.src.original} rel="noopener noreferrer" target="_blank">
                <img src={photo.src.landscape} alt={props.keyword} className="img-fluid"/>
                </a>

      </div>
      
    )
    })}
    </div>
    </div>
  )
} else {
  return (
    null
  )
}
}