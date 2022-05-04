import { useState, useEffect } from "react";
import { addMovie } from "../../axios-services/lib_ajax";

const AddMovie = ({me, movies, setMovies }) => {
  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const [year, setYear] = useState("");
  const [genre, setGenre] = useState("");
  const [length, setLength] = useState("");
  const [price, setPrice] = useState("");
  const [img, setImg] = useState("");
  const [addMovieMessage, setAddMovieMessage] = useState("");

  let authenticated = false;
  let admin = false;
  if (me.admin || localStorage.getItem("admin")) {
    authenticated = true;
    admin=true;
  }

  const onCreate = async (e) => {
    e.preventDefault();
    const data = await addMovie(name, type, year, genre, length, price, img);
    if (data.error) {
      setAddMovieMessage(data);
    }
    setMovies([data, ...movies]);
    setName("");
    setType("");
    setYear("");
    setGenre("");
    setLength("");
    setPrice("");
    setImg("");
  };
  useEffect(() => {}, [admin]);
  return (
      <div className="new-movie-container">
      {authenticated === true ? (
        <>
          <div className='new-movie-header'>
          <h3>Add New Movie</h3>
          </div>
          <form className="new-form" onSubmit={onCreate}>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Title"
            />
            <input
              type="text"
              value={type}
              onChange={(e) => setType(e.target.value)}
              placeholder="Content Type"
            />
            <input
              type="text"
              value={year}
              onChange={(e) => setYear(e.target.value)}
              placeholder="Release Year"
            />
            <input
              type="text"
              value={genre}
              onChange={(e) => setGenre(e.target.value)}
              placeholder="Genre"
            />
            <input
              type="text"
              value={length}
              onChange={(e) => setLength(e.target.value)}
              placeholder="Video Length"
            />
            <input
              type="text"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              placeholder="Purchase Price"
            />
            <input
              type="text"
              value={img}
              onChange={(e) => setImg(e.target.value)}
              placeholder="Image Link"
            />
            <button type="submit">Add New Movie</button>
          </form>
          {addMovieMessage.error ? (
            <>
              <h3>{addMovieMessage.message}</h3>
            </>
          ) : null}
        </>
      ) : (null)}
    
    </div>
  );
};
export default AddMovie;
