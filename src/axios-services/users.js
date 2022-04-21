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
    const { data } = await axios.post({
      method: "post",
      url: "api/users",
      data: {
        username,
        password,
      },
    });
    return data;
  } catch (err) {
    console.error("error", err);
  }
};
