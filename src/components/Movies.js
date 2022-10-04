import React from "react";
import { movies } from "../data";

function Movies() {

  const allMovies = movies.map((movie)=> {
    return (
      <div key={movie.title}>
      <h3>{movie.title}</h3>
      <p>{movie.time}</p>
      <ul>
        {movies.genres.map((genre)=>{
        return (<li>
          {genre}
        </li>
        )})}
      </ul>
      </div>
      
    )
  })
  return <>
    <h1>Movies Page</h1>
    <>
      {allMovies}
    </>
  </>;
}

export default Movies;
