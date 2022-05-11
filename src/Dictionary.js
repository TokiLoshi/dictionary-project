import React, { useState } from "react";
import "./Dictionary.css";
import axios from "axios";
import Results from "./Results";

export default function Dictionary(props) {
  let [keyword, setKeyword] = useState(props.defaultKeyword);
  let [results, setResults] = useState(null);
  let [loaded, setLoaded] = useState(false);

function handleResponse(response) {
  console.log(response.data[0]);
  console.log(response.data[0].meanings[0].definitions[0].definition);
  setResults(response.data[0]);
}

function search() {
  let apiUrl= `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleResponse);
}

  function handleSubmit(event) {
  event.preventDefault();
  search();
}
function load() {
  setLoaded(true);
  search();
}

function handleKeywordChange(event) {
  setKeyword(event.target.value);
  
}
if (loaded) {
  return (
    <section className="Dictionary m-2">
      <section>
      <form onSubmit={handleSubmit} className="Dictionary text-center">
        <label className="d-block text-center mb-2">Search for definitions, synonyms and more...</label>
      <input type="search" className="searchBar p-2" placeholder="Search for a word..." autoFocus={true} onChange={handleKeywordChange}/>
      <input type="submit" value="Search" className="Search btn btn-light m-3" />
      </form>
      <div className="hint">Suggested words: hello, world, friend</div>
      </section>

    <Results results={results}/>


    </section>
  )
} else {
  load();
  return (
    "Loading..."
  );
}
}