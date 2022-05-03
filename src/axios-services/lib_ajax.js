import axios from "axios";

export async function getLibrary({limit=false, offset=false}) {
  try {
    const { data } = await axios.put(`/api/library`, {limit:limit, offset: offset});
    return data;
  } catch (err) {
    console.error('Unable to get library...', err);
    return err;
  }
}

export const addMovie = async (name, type, year, genre, length, price, img) => {
  try {
    const { data } = await axios.post(`/api/library/new`, {
      name,
      type,
      year,
      genre,
      length,
      price,
      img,
    });
    return data;
  } catch (err) {
    console.error("Unable to add new movie to database...", err);
    return error;
  }
};

export const updateMovie = async (
  name,
  type,
  year,
  genre,
  length,
  price,
  img,
  moviesId
) => {
  try {
    const { data } = await axios.patch(`/api/library/${moviesId}`, {
      name,
      type,
      year,
      genre,
      length,
      price,
      img,
    })
    return data
  } catch (err) {
    console.error("Unable to edit movie...", err)
  }
};

export const deleteMovie = async(movieId) => {
  try {
    const { data } = await axios.delete(`/api/library/${movieId}`)
    return data
  } catch (err) {
    console.error("Unable to delete movie...", err)
  }
}
