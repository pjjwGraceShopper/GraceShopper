import React, { useState, useEffect } from "react";
import { getLibrary } from "../../axios-services";

const MovieList = (props) => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    async function thing() {
      const lib = await getLibrary();
      console.log(lib);
      setMovies(lib);
    }
    thing();
  }, []);
  if (!movies) return <h3>Loading...</h3>;
  //   return (
  //     <>
  //       {movies.map((movie, index) => (
  //         <div className='d-flex justify-content-start m-3'>
  //           <img className='movie-img' src={movie.img} alt='movie'></img>
  //         </div>
  //       ))}
  //     </>
  //   );
};

export default MovieList;
