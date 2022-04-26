import axios from "axios";

export async function getUsers() {
  try {
    const { data: users } = await axios.get("/api/users");
    return users;
  } catch (err) {
    console.error(err);
  }
}

export const registerUser = async (username, password) => {
  try {
    const { data } = await axios.post("api/users/register", {username, password});
    console.log("Data", data)
    return data
  } catch (err) {
    console.error("error", err);
  }
};

export const userLogin = async (username, password) => { 
  try {
    const { data } = await axios.post("api/users/login", {username, password});
    console.log("Data", data)
    return data
  } catch (err) {
    console.error("error", err);
  }
};
