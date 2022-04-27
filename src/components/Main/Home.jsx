import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState, useEffect } from "react";
import MovieList from "./MovieList";
import { getLibrary } from "../../axios-services";

function Home() {


  return (
    <div className='container-fluid movie-app'>
      <div className='row'>
        <MovieList />
      </div>
    </div>
  );
}

export default Home;
