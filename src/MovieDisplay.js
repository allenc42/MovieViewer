import { useEffect, useState } from "react";
import './App.css'; 
import MovieSort from './MovieSort.js';
//API key
const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization:
      process.env.API_KEY
    }
  }; 


function MovieDisplay({pageNumber, inputText, selectionOption, setTotalPages}) {
    const [moviesInfo, setMoviesInfo] = useState([]);
    let url = `https://api.themoviedb.org/3/movie/popular?language=en-US&page=${pageNumber}`;


    //Updates url everytime page and search textbox changes 
    useEffect(()=> {
        if(inputText !== "") {
           url = `https://api.themoviedb.org/3/search/movie?query=${inputText}
           &include_adult=false&language=en-US&page=${pageNumber}`; 
        }

        fetch(url, options)
        .then(res => res.json())
        .then(res => {
            setMoviesInfo(res.results); 
            setTotalPages(res.total_pages);
        })
        .catch(err => console.error(err));
    }, [pageNumber, inputText])

    return (
        <div>
        <MovieSort selectionOption = {selectionOption} moviesInfo = {moviesInfo} setMoviesInfo = {setMoviesInfo}/>
        </div>
      );
    }

export default MovieDisplay;
