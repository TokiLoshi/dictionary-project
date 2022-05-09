import React, { useState } from "react";
import "./Dictionary.css";

export default function Dictionary(event) {
  let [keyword, setKeyword] = useState("");

  function handleResponse(event) {
  event.preventDefault();
  return (
    alert(`Searching for "${keyword}" definition`)
  );
  
}
function handleKeywordChange(event) {
  setKeyword(event.target.value);
 
}

  return (
    <div className="Dictionary">
      <form onSubmit={handleResponse}>
        <label className="d-block mb-2">Search for definitions, synonyms and more...</label>
      <input type="search" placeholder="search for a word" autoFocus={true} onChange={handleKeywordChange}/>
      <input type="submit" value="Search" className="Search btn btn-primary m-2" />
      </form>
<p>You are searching for:...{keyword} </p>
    </div>
  )
}