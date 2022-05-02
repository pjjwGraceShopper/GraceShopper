import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState, useEffect } from "react";
import MovieList from "./MovieList";
import { getLibrary } from "../../axios-services";
import AddMovie from "./AddMovie";

function Home({ currentMovie, setCurrentMovie, movies, setMovies }) {

  return (
    <div className="container-fluid movie-app">
      <div className="row">
        <MovieList
          currentMovie={currentMovie}
          setCurrentMovie={setCurrentMovie}
        />
        
        
      </div>
      <AddMovie movies={movies} setMovies={setMovies} />
    </div>
  );
}

export default Home;
