import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState, useEffect } from "react";
import MovieList from "./MovieList";
import { getLibrary } from "../../axios-services";
import UpdateMovie from "./UpdateMovie";
import AddMovie from "./AddMovie";
import { useNavigate } from "react-router-dom";

//----------------------------------------------------------------
function Home({ currentMovie, setCurrentMovie, movies, setMovies }) {
  //----------------------------------------------------------------
  const [otherMovies, setOtherMovies] = useState([])
  const navigate = useNavigate();
  //----------------------------------------------------------------
  useEffect(() => {
    async function thing() {
      const lib2 = await getLibrary({limit:false}, {offset: '20'});
      setOtherMovies(lib2)
    }
    thing();
  }, []);
  //----------------------------------------------------------------
  return (
    <div className="container-fluid movie-app">
       <div id="Logo-container">
       <img src="../../../logo/BlueBox.png" id="Logo" alt="BlueBox"></img>
        </div>
      <div className="row-scroller">
        <MovieList
          currentMovie={currentMovie}
          setCurrentMovie={setCurrentMovie}
        />
      </div>
      <div className="movielist-bottom-container">
        {otherMovies.length ? otherMovies.map((movie, index) => (
        <img
        onClick={(e)=>{e.preventDefault;
          setCurrentMovie(movie)
          navigate(`/Lists/${movie.id}`)}}

          key={movie.id}
          className='movie-img'
          src={movie.img}
          alt='movie'
        ></img>

        )): "Loading..."}
        </div>
    </div>
  );
}
//----------------------------------------------------------------
export default Home;
