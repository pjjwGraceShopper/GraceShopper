import React, { useState, useEffect } from "react";
import { getLibrary } from "../../axios-services";

const MovieList = () => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    async function thing() {
      const lib = await getLibrary();
      setMovies(lib);
    }
    thing();
  }, []);
  if (!movies) return <h3>Loading...</h3>;
  return (
    <>
      {movies.map((movie, index) => (
        <img
          key={movie.id}
          className='movie-img'
          src={movie.img}
          alt='movie'
        ></img>
      ))}
    </>
  );
};

export default MovieList;
