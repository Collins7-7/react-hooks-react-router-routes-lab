import React from "react";
import { actors } from "../data";

function Actors() {
  return <>
    <h1>Actors Page</h1>
    {actors.map((actor)=>{
      return (
        <div key={actor.name}>
          <h4>{actor.name}</h4>
          {actor.movies.map((movie)=>{
            return (
              <ul key={movie}>
                <li>{movie}</li>
              </ul>
            )
          })}

        </div>
      )
    })}
  </>;
}

export default Actors;
