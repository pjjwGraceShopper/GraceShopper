import axios from "axios";

export async function getLibrary() {
  try {
    const { data } = await axios.get(`/api/library`);
    return data;
  } catch (err) {
    console.error(err, "axios error");
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
    console.error("Unable to add new movie to database", err);
    return error;
  }
};
