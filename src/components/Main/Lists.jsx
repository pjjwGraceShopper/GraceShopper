import React, { useEffect, useState } from "react";
import { getLibrary } from "../../axios-services";


const Lists = ({currentMovie}) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function thing() {
      const lib = await getLibrary();
      setMovies(lib);
      // console.log(movies);
    }
    thing();
  }, []);
  // console.log(movies);

  return (
    <div className="lists">
     
      <ul>
        <li>All</li>
        <li>Movies</li>
        <li>TV Shows</li>
        <li>Rented</li>
      </ul>

      <div className="title-container">
        <ul className="title">
          <h3>{currentMovie.name}</h3>
          <h4></h4>
        </ul>
      </div>
      <div className="detail-container">

        <ul>
          <li>{currentMovie.year} </li>
          <li>{currentMovie.type} </li>
          <li> {currentMovie.length} </li>
          <li> {currentMovie.price} </li>
          <li> {currentMovie.genre} </li>
        </ul>
      </div>

      <div className="flex-container">
        <div className="flex-child poster">
          <img className="movie-image" src={currentMovie.img} style={{width: 300, height: 400}}></img>
          {/* <img key={currentMovie.id} className="movie-img" scr={currentMovie.img} alt="movie"></img>  */}
        </div>
        <div className="flex-child description">
          <p className="p1">{currentMovie.name}</p>
          <p> Rate This Movie</p>
          <p className="text-break">
          Lorem ipsum dolor sit amet,
            consectetur adipiscing elit, 
            sed do eiusmod tempor incididunt 
            ut labore et dolore magna aliqua. 
            Ut enim ad minim veniam, quis 
            nostrud exercitation ullamco laboris 
            nisi ut aliquip ex ea commodo consequat. 
            Duis aute irure dolor in reprehenderit 
            in voluptate velit esse cillum dolore 
            eu fugiat nulla pariatur. Excepteur 
            sint occaecat cupidatat non proident, 
            sunt in culpa qui officia deserunt mollit 
            anim id est laborum.</p>
        </div>

      </div>

      <div className="wishlist-bottom-container">
        <button className="wishlist-bottom" onClick={() => updateDev()}>
          Add to Wishlist
        </button>
        <button
          className="wishlist-bottom"
          onClick={() => {
            addItemToCart(me.id, { item1337v2: `leetItemButBetter` });
            setCartChange(true);
          }}
        >
          {" "}
          Add To Cart
        </button>

      </div>
    </div>
  );
};

export default Lists;
