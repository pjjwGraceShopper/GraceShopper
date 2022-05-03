import { useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { getLibrary } from "../../axios-services";


const MovieList = ({currentMovie, setCurrentMovie}) => {
  const navigate = useNavigate();
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
      <div className="MovieList-container">
        <>
        {movies.length ? movies.map((movie, index) => (
        <img
        onClick={(e)=>{e.preventDefault;
          setCurrentMovie(movie)
          navigate(`/Lists/${movie.id}`)}}

          key={movie.id}
          className='movie-img'
          src={movie.img}
          alt='movie'
        ></img>

        )): "Your Purchased Movies will be displayed here"}
        </>
      </div>
    );

};

export default MovieList;
