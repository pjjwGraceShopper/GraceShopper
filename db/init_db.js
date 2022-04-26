// const {
//   client
//   // declare your model imports here
//   // for example, User
// } = require('./');

const client = require("./client");
const { usersDB } = require("./index");

//----------------------------------------------------------------
async function buildTables() {
  try {
    // drop tables in correct order
    await client.query(`
    DROP TABLE IF EXISTS cart;
    DROP TABLE IF EXISTS movies;
    DROP TABLE IF EXISTS idxlib;
    DROP TABLE IF EXISTS users;
    `);
    // build tables in correct order

    await client.query(`
   
    CREATE TABLE users
    (
    id SERIAL PRIMARY KEY,
    username VARCHAR(255) NOT NULL,
    password VARCHAR(350) NOT NULL,
    email VARCHAR(255) NOT NULL,
    firstName VARCHAR(255) NOT NULL,
    lastName VARCHAR(255) NOT NULL,
    admin BOOLEAN DEFAULT false
    );

         
    CREATE TABLE idxlib
    (
    id SERIAL primary key,
    name varchar(50) NOT NULL,
    type varchar(20) NOT NULL,
    year int NOT NULL,
    genre varchar(20) NOT NULL,
    length int NOT NULL,
    price money NOT NULL,
    img text
    );
    CREATE TABLE Movies 
    (
      id SERIAL PRIMARY KEY,
      "idx_id" INTEGER REFERENCES idxlib(id) NOT NULL,
      link TEXT NOT NULL
    );
    CREATE TABLE cart 
    (
      id SERIAL PRIMARY KEY,
      "user_cart" INTEGER REFERENCES users(id) NOT NULL,
      items JSONB
    );
      
    `);
  } catch (error) {
    throw error;
  }
}
//----------------------------------------------------------------
async function populateInitialData() {
  console.log("populateInitialData");
  const path = require("path");
  const pathToCSV = path.join(__dirname, "internal/MoviesDBCSV.csv");

  try {
    const user1 = await usersDB.createUser({
      username: `WyattAdmin`,
      password: `WyattAdmin`,
      email: `WyattAdmin@Bluebox.com`,
      firstName: `Wyatt`,
      lastName: `W`,
      admin: true,
    });
    const user2 = await usersDB.createUser({
      username: `JoshAdmin`,
      password: `JoshAdmin`,
      email: `JoshAdmin@Bluebox.com`,
      firstName: `Josh`,
      lastName: `W`,
      admin: true,
    });
    const user3 = await usersDB.createUser({
      username: `JacobAdmin`,
      password: `JacobAdmin`,
      email: `JacobAdmin@Bluebox.com`,
      firstName: `Jacob`,
      lastName: `M`,
      admin: true,
    });
    const user4 = await usersDB.createUser({
      username: `PamAdmin`,
      password: `PamAdmin`,
      email: `PamAdmin@Bluebox.com`,
      firstName: `Pam`,
      lastName: `S`,
      admin: true,
    });
    const user5 = await usersDB.createUser({
      username: `User1`,
      password: `User1`,
      email: `User1@Bluebox.com`,
      firstName: `John`,
      lastName: `Smith`,
      admin: false,
    });

    const popIdx = await client.query(`
  COPY IDXlib FROM '${pathToCSV}' 
  WITH DELIMITER ',' 
  CSV HEADER;
  `);
  } catch (error) {
    throw error;
  }
}

async function rebuildDB() {
  client.connect();
  await buildTables();
  await populateInitialData()
    .then(console.log("successfully rebuilt"))
    .catch(console.error)
    .finally(() => client.end());
}
rebuildDB();
