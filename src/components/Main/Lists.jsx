import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import MovieList from "./MovieList";
import { getLibrary, addItemToCart } from "../../axios-services";


const Lists = ({ currentMovie, me, setCartChange }) => {
  const [movies, setMovies] = useState([]);
  const movieToAdd = new Object();
  movieToAdd[currentMovie.id] = currentMovie.price;
  //----------------------------------------------------------------
  useEffect(() => {
    "";
    async function thing() {
      const lib = await getLibrary();
      setMovies(lib);
      // console.log(movies);
    }
    thing();
  }, []);
  // console.log(movies);

  return (
    <div className="Detailed-View-Container">
      {/* TITLE START ****************** */}
      <div className="title-container">
        <div className="title">
          <h3>{currentMovie.name}</h3>
          <h4></h4>
        </div>
      </div>
      {/* END ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ */}
      <div className="seg1-container">
      {/* DETAILS START **************************** */}
      <div className="detail-container">
        <ul className="detail-list">
          <li>{currentMovie.year} </li>
          <li>{currentMovie.type} </li>
          <li> {currentMovie.length} </li>
          <li> {currentMovie.price} </li>
          <li> {currentMovie.genre} </li>
        </ul>
      </div>
      {/* DETAILS END ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ */}
      {/* FLEX START ********************/}
      <div className="flex-container">
        <div className="flex-child poster">
          <img
            className="movie-image"
            src={currentMovie.img}
            style={{ width: 300, height: 400 }}
          ></img>
          {/* <img key={currentMovie.id} className="movie-img" scr={currentMovie.img} alt="movie"></img>  */}
        </div>
      </div>
      {/* ^^^^^^^^^^^^^  END  ^^^^^^^^^ */}
      </div>
      {/* DESCRIPTIONS START **************** */}
      <div className="description">
        <p>
          {" "}
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
      </div>
      {/* END ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ */}
      {/* WISHLIST START ******************** */}
      <div className="wishlist-bottom-container">
        <button
          className="wishlist-bottom"
          onClick={() => {
            addItemToCart(me.id, movieToAdd);
            setCartChange(Math.random());
          }}
        >
          Add to Wishlist
        </button>
        <button
          className="wishlist-bottom"
          onClick={() => {
            addItemToCart(me.id, movieToAdd);
            setCartChange(Math.random());
          }}
        >
          {" "}
          Add To Cart
        </button>
        {/* <button>
          
        </button> */}
      </div>
      {/* END ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ */}
    </div>
  );
};

export default Lists;
