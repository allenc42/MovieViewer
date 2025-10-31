import './App.css';
import MovieDisplay from './MovieDisplay.js';
import { useState } from 'react';

function App() {

  const [pageNumber, setPageNumber] = useState(1);
  const [inputText, setInputText] = useState("");
  const [selectionOption, setSelectionOption] = useState("");
  const [totalPages, setTotalPages] = useState(0);

  const handlePrevious = () => {
    if(pageNumber === 1) {
      //Can't go before 0
    } else {
    setPageNumber(pageNumber - 1);
    }
  }

  const handleNext = () => {
    if(pageNumber === totalPages) {
      //last page
    } else {
      setPageNumber(pageNumber + 1);
    }
  }

  const handleInput = (e) => {
    setInputText(e.target.value);
  }
  const handleSelect = (e) => {
    setSelectionOption(e.target.value);
  }

  return (
    <div>
      <h1 id="header">Movie Explorer</h1>
      <h2 id="header2">
        <input className="inputBoxes" type="text" placeholder=" Search for a movie..." onChange={handleInput}/>
        <select id="movieInfo" className="inputBoxes" onChange ={handleSelect}>
            <option>Sort By</option>
            <option value="release_date.asc">Release Date (Asc)</option>
            <option value="release_date.desc">Release Date (Desc)</option>
            <option value="vote_average.asc">Rating (Asc)</option>
            <option value="vote_average.desc">Rating (Desc)</option>
        </select>
    </h2>

    <MovieDisplay pageNumber = {pageNumber} inputText = {inputText} selectionOption = {selectionOption} setTotalPages = {setTotalPages}/>

    <div className = "horizontal">
        <button id="previousButton" className="blueButtons" onClick = {handlePrevious} >Previous</button>
        <p id="GetPageNumber" className="pageNumber">Page {pageNumber} of {totalPages}</p>
        <button id="nextButton" className="blueButtons" onClick ={handleNext}>Next</button>
    </div>
    
    </div>
  );
}

export default App;
