import React, {useState, useEffect} from "react";
import { useNavigate } from "react-router-dom";
import {getMyLibrary} from "../../axios-services"
// Link : https://youtu.be/dQw4w9WgXcQ
//----------------------------------------------------------------
const MyLibrary = ({me}) => {
  //----------------------------------------------------------------
 const link = 'https://youtu.be/dQw4w9WgXcQ'
 const navigate = useNavigate();
 const [myMovies, setMyMovies] = useState([]);
 //----------------------------------------------------------------
 useEffect(() => {
   async function thing() {
     const lib = await getMyLibrary(me.id);
     setMyMovies(lib);
   }
   thing();
 }, []);
  //----------------------------------------------------------------
  return (
    <div className='myLib-container'>
      <div className='myLib-Nav'>
      <ul>
        <li>All</li>
        <li>Movies</li>
        <li>TV Shows</li>
        <li>Rented</li>
      </ul>
      </div>
      <div className='myLib'>
      <>
        {myMovies.map((movie, i) => (
        <img
        onClick={(e)=>{e.preventDefault; window.location.href = "https://youtu.be/dQw4w9WgXcQ";}}
          key={movie.id}
          className='movie-img'
          src={movie.img}
          alt='movie'
        ></img>

        ))}
      </>
      </div>
    </div>
  );
};
//----------------------------------------------------------------
export default MyLibrary;
