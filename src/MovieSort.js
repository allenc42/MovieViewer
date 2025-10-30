import './App.css';

function MovieSort({selectionOption, moviesInfo}) {
    if(selectionOption === "vote_average.asc") {
        moviesInfo.sort(function(a,b) {return a.vote_average - b.vote_average});
    }
    if(selectionOption === "vote_average.desc") {
        moviesInfo.sort(function(a,b) {return b.vote_average - a.vote_average});
    }
    if(selectionOption === "release_date.asc") {
        moviesInfo.sort(function(a,b) {return new Date(a.release_date) - new Date(b.release_date)});
    }
    if(selectionOption === "release_date.desc") {
        moviesInfo.sort(function(a,b) {return new Date(b.release_date) - new Date(a.release_date)});
    }

    return (
        <div className ="container">
            {moviesInfo.map((movie, index) => (
                <div className="box">
                <img className="posterSize" src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}></img>
                <p className="title" key={index}> {movie.title} </p>
                <p className="release" key={index}>Release Date: {movie.release_date}</p>
                <p className="font" key={index}> Rating: {movie.vote_average}</p>
        </div>
            ))}
    </div>)
}

export default MovieSort;