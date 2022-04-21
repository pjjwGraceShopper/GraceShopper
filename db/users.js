// grab our db client connection to use with our adapters
const client = require("./client")
const bcrypt = require("bcrypt");

async function createUser({ username, password }) {
  try {
    const SALT_COUNT = 10;
    const hashedPassword = await bcrypt.hash(password, SALT_COUNT);

    const {
      rows: [user],
    } = await client.query(
      `
    INSERT INTO users (username, password)
    VALUES ($1, $2)
    RETURNING *;
    `,
      [username, hashedPassword]
    );
    delete user.password;
  } catch (error) {
    console.error("Problem creating user...", error);
  }
}

async function getUser({ username, password }) {
  try {
    const user = await getUserByUsername(username);
    const hashedPassword = user.password;
    const passwordsMatch = await bcrypt.compare(password, hashedPassword);
    if (passwordsMatch) {
      const {
        rows: [user],
      } = await client.query(
        `
        SELECT *
        FROM users
        WHERE username = $1
        AND password = $2;
      `,
        [username, hashedPassword]
      );
      delete user.password;
      return user;
    } else {
      throw new Error("Passwords did not match...");
    }
  } catch (error) {
    console.error("Problem getting user...", error);
  }
}

async function getUserById(id) {
  try {
    const {
      rows: [user],
    } = await client.query(
      `
      SELECT *
      FROM users
      WHERE id = $1;
    `,
      [id]
    );
    return user;
  } catch (error) {
    console.error("Problem getting user by id...", error);
  }
}

async function getUserByUsername() {
  try {
    const {
      rows: [user],
    } = await client.query(
      `
      SELECT *
      FROM users
      WHERE username = $1;
    `,
      [username]
    );
    return user;
  } catch (error) {
    console.error("Problem getting user by username...", error);
  }
}

async function getAllUsers() {
  /* this adapter should fetch a list of users from your db */
}

module.exports = {
  // add your database adapter fns here
  createUser,
  getUserById,
  getUser,
  getUserByUsername,
  getAllUsers,
};
