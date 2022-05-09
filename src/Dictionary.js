import React, { useState } from "react";
import "./Dictionary.css";
import axios from "axios";

export default function Dictionary(event) {
  let [keyword, setKeyword] = useState("");

function handleResponse(response) {
  console.log(response.data[0]);
}
  function search(event) {
  event.preventDefault();
    let apiUrl= `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleResponse);
}

function handleKeywordChange(event) {
  setKeyword(event.target.value);
  
}

  return (
    <div className="Dictionary">
      <form onSubmit={search}>
        <label className="d-block mb-2">Search for definitions, synonyms and more...</label>
      <input type="search" placeholder="search for a word" autoFocus={true} onChange={handleKeywordChange}/>
      <input type="submit" value="Search" className="Search btn btn-primary m-2" />
      </form>
<p>You are searching for:...{keyword} </p>
    </div>
  )
}