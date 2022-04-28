import React, { useState, useEffect } from "react";
import { getLibrary } from "../../axios-services";
import { useNavigate } from "react-router-dom";

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
  const navigate = useNavigate();

  function handleClick(e) {
    e.preventDefault;
    navigate("/Lists");
  }
  return (
    <>
      {movies.map((movie, index) => (
        <img
          onClick={handleClick}
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
