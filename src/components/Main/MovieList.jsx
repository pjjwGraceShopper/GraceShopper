import React from "react";
import { getLibrary } from "../../axios-services";

const MovieList = (props) => {
  async function thing() {
    const lib = await getLibrary();
    console.log(lib);
  }

  return (
    <>
      {props.movies.map((movie, index) => (
        <div className='d-flex justify-content-start m-3'>
          <img className='movie-img' src={movie.img} alt='movie'></img>
        </div>
      ))}
    </>
  );
};

export default MovieList;
