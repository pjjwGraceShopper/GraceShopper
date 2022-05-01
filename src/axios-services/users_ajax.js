import axios from "axios";

export async function getUsers() {
  try {
    const { data: users } = await axios.get("/api/users");
    return users;
  } catch (err) {
    console.error(err);
  }
}

export const registerUser = async (
  username,
  password,
  email,
  firstName,
  lastName
) => {
  try {
    const { data } = await axios.post("api/users/register", {
      username,
      password,
      email,
      firstName,
      lastName,
    });
    return data;
  } catch (err) {
    console.error("error", err);
  }
};

export const userLogin = async (username, password) => {
  try {
    const { data } = await axios.post("api/users/login", {
      username,
      password,
    });
    return data;
  } catch (err) {
    console.error("error", err);
  }
};

export const myData = async (token) => {
  if (token) {
    try {
      const {data} = await axios.get("api/users/me", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return data;
    } catch (error) {
      console.error("error", error);
    }
  }
};
