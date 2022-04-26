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
