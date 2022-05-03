import React, { useState } from "react";
import { updateMovie } from "../../axios-services/lib_ajax";

const UpdateMovie = ({ movieId, movies, setMovies }) => {
  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const [year, setYear] = useState("");
  const [genre, setGenre] = useState("");
  const [length, setLength] = useState("");
  const [price, setPrice] = useState("");
  const [img, setImg] = useState("");

  const authenticated = localStorage.getItem("isAdmin") ? true : false;

  const onUpdate = async (e) => {
    e.preventDefault();
    const data = await updateMovie();
    if (data && data.name) {
      const newMovies = [
        data,
        ...movies.filter((movie) => {
          return movie.id !== movieId;
        }),
      ];

      setMovies(newMovies);
      setName("");
      setType("");
      setYear("");
      setGenre("");
      setLength("");
      setPrice("");
      setImg("");
    }
  };

  return (
    <div className="new-movie-container">
      <div>
        {authenticated === true ? (
          <>
            <h3> Edit Movie</h3>
            <form
              className="new-form"
              onSubmit={(e) => {
                onUpdate(e, movieId);
              }}
            >
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
              <button type="submit">Edit Movie</button>
            </form>
          </>
        ) : null}
      </div>
    </div>
  );
};

export default UpdateMovie;
