import React from "react";
import { getLibrary } from "../../axios-services";

const MovieList = (props) => {
  async function thing() {
  const lib = await getLibrary();
  console.log(lib);}
    thing()

  return (
    <>
      {props.movies.map((movie, index) => (
        <div>
          <img className='movie-img' src={movie.img} alt='movie'></img>
        </div>
      ))}
    </>
  );
};

export default MovieList;
