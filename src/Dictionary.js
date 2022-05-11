import React, { useState } from "react";
import "./Dictionary.css";
import axios from "axios";
import Results from "./Results";
import Photos from "./Photos";

export default function Dictionary(props) {
  let [keyword, setKeyword] = useState(props.defaultKeyword);
  let [results, setResults] = useState(null);
  let [loaded, setLoaded] = useState(false);
  let [photos, setPhotos] = useState(null);

function handleResponse(response) {
  setResults(response.data[0]);
}

function handlePexelsResponse(response) {
  setPhotos(response.data.photos);
}

function search() {
  let apiUrl= `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleResponse);
    let pexelsApiKey = "563492ad6f917000010000015d5acc48a9e044f89556d679c922431e";
    let token = pexelsApiKey;
    let headers = {"Authorization" :`Bearer ${token}`};
    let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=9`;
    axios.get(pexelsApiUrl, {headers: headers}).then(handlePexelsResponse);
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
      <input type="search" className="searchBar p-2" placeholder="Search for a word..." autoFocus={true} onChange={handleKeywordChange} />
      <input type="submit" value="Search" className="Search btn btn-light m-3" />
      </form>
      <div className="hint">Suggested words: hello, world, friend</div>
      </section>

    <Results results={results}/>
    <Photos photos={photos} />


    </section>
  )
} else {
  load();
  return (
    "Loading..."
  );
}
}