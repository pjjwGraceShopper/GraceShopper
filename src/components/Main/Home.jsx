import React, { useState } from "react";
import MovieList from "./MovieList";

function Home() {
  const [movies, setMovies] = useState([
    {
      id: 1,
      name: "red",
      type: "movie",
      year: 2000,
      genre: "action",
      length: 132,
      price: "$32.99",
      img: "https://th.bing.com/th/id/R.4e266c85a8f60203d0ecf6f907f58aba?rik=uSlBAK7KhjNfsg&pid=ImgRaw&r=0",
    },
    {
      id: 2,
      name: "blue",
      type: "movie",
      year: 2001,
      genre: "romance",
      length: 120,
      price: "$29.99",
      img: "https://th.bing.com/th/id/OIP.-GTee3XzYftPH-52ZY7HPQHaLH?pid=ImgDet&rs=1",
    },
    {
      id: 3,
      name: "Shaun The Sheep",
      type: "movie",
      year: 2007,
      genre: "comedy",
      length: 5,
      price: "$2.99",
      img: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQvQn5iyqbTd4SCkrBSdHIzpn4OfkXFjq29oi8V1Fzo8lGh1pqp",
    },
  ]);
  return (
    <div>
      <h1 className='main_title'>Welcome to Blue Box!</h1>
      <div className='home-titles'>
        <h3>Movies</h3>
        <div className="row">
          <MovieList movies={movies} />
          </div>
      </div>
    </div>
  );
}

export default Home;
