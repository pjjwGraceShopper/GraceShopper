// grab our db client connection to use with our adapters
const client = require("../client")
const bcrypt = require("bcrypt");

async function createUser({ username, password, email, firstName, lastName, admin }) {
  console.log(`Creating ${firstName}'s Account`)
  try {
    if(admin !== true){
      admin = false
    }
    const SALT_COUNT = 10;
    const hashedPassword = await bcrypt.hash(password, SALT_COUNT);

    const {
      rows: user
    } = await client.query(
      `
      INSERT INTO users(username, password, email, firstName, lastName, admin)
      VALUES( $1 , $2, $3, $4, $5, $6 )
      RETURNING *;
    `, [username, hashedPassword, email, firstName, lastName, admin] );

    delete user.password;
    return user
  } catch (error) {
    console.error("Problem creating account...", error);
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

async function getUserByUsername(username) {
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

async function getUserByEmail(email) {
  try {
    const {
      rows: [user],
    } = await client.query(
      `
      SELECT *
      FROM users
      WHERE email = $1;
    `,
      [email]
    );
    return user;
  } catch (error) {
    console.error("Problem getting user by email...", error);
  }
}

async function getAllUsers() {
  try {
    const { rows: user } = await client.query(`
      SELECT * FROM users;
    `);
    return user
  } catch (error) {
    console.error('Problem getting all users...', error)
  }
}

module.exports = {
  // add your database adapter fns here
  createUser,
  getUserById,
  getUser,
  getUserByUsername,
  getAllUsers,
  getUserByEmail
};
