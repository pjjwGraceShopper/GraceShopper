// const {
//   client
//   // declare your model imports here
//   // for example, User
// } = require('./');

const client = require("./client");
const { usersDB, cartDB, myLibraryDB } = require("./index");
// import {describe, expect, test} from '@jest/globals'

//----------------------------------------------------------------
async function buildTables() {
  try {
    // drop tables in correct order
    await client.query(`
    DROP TABLE IF EXISTS userlibrary;
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
      items JSONB DEFAULT '{}'::jsonb
    );
    CREATE TABLE userlibrary
    (
      id SERIAL PRIMARY KEY,
      "user_lib" INTEGER REFERENCES users(id) NOT NULL,
      items JSONB DEFAULT '{}'::jsonb
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
    //----------------------------------------------------------------
    const popIdx = await client.query(`
      COPY IDXlib FROM '${pathToCSV}' 
      WITH DELIMITER ',' 
      CSV HEADER;
      `);
    const resetlibidx = await client.query(`
    SELECT pg_catalog.setval(pg_get_serial_sequence('idxlib', 'id'), MAX(id)) FROM idxlib;
      `);
    //----------------------------------------------------------------
    console.log("Populating Intial Users Carts...");
    const user1Cart = await cartDB.createUserCart_DB(1);
    const user2Cart = await cartDB.createUserCart_DB(2);
    const user3Cart = await cartDB.createUserCart_DB(3);
    const user4Cart = await cartDB.createUserCart_DB(4);
    const user5Cart = await cartDB.createUserCart_DB(5);
    //----------------------------------------------------------------
    console.log("Populating Intial Users Cart Items...");
    const user1CartItem = await cartDB.addToCartItems_DB(1, {
      8: "Shang-Chi and the Legend of the Ten Rings",
    });
    const user2CartItem = await cartDB.addToCartItems_DB(2, {
      8: "Shang-Chi and the Legend of the Ten Rings",
    });
    const user3CartItem = await cartDB.addToCartItems_DB(3, {
      8: "Shang-Chi and the Legend of the Ten Rings",
    });
    const user4CartItem = await cartDB.addToCartItems_DB(4, { 9: "Banana" });
    const user5CartItem = await cartDB.addToCartItems_DB(5, { 10: "Pickles" });
    //----------------------------------------------------------------
    console.log("Populating Intial Users Libraries...");
    const user1Librarary = await myLibraryDB.createUserLibrary_DB(1);
    const user2Librarary = await myLibraryDB.createUserLibrary_DB(2);
    const user3Librarary = await myLibraryDB.createUserLibrary_DB(3);
    const user4Librarary = await myLibraryDB.createUserLibrary_DB(4);
    const user5Librarary = await myLibraryDB.createUserLibrary_DB(5);
    //----------------------------------------------------------------
    console.log("Populating Initial User Libraries...");
    const user1LibraryItem = await myLibraryDB.addToUserLibrary_DB(1, {
      1: "test",
    });
    const user2LibraryItem = await myLibraryDB.addToUserLibrary_DB(2, {
      2: "test",
    });
    const user3LibraryItem = await myLibraryDB.addToUserLibrary_DB(3, {
      4: "test",
    });
    const user4LibraryItem = await myLibraryDB.addToUserLibrary_DB(4, {
      5: "test",
    });
    const user5LibraryItem = await myLibraryDB.addToUserLibrary_DB(5, {
      6: "test",
    });
    //----------------------------------------------------------------
    console.log("rebuild completed");
    // expect(user1Cart.user_cart).to.equal(user1.id)
    // expect(user5Cart.user_cart).to.equal(user5.id)
    //----------------------------------------------------------------
  } catch (error) {
    throw error;
  }
  //----------------------------------------------------------------
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
