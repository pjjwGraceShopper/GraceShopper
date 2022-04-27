// const {
//   client
//   // declare your model imports here
//   // for example, User
// } = require('./');

const client = require("./client");
const {
  usersDB,
  cartDB
} = require("./index");
// import {describe, expect, test} from '@jest/globals'

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
    //----------------------------------------------------------------
    const popIdx = await client.query(`
      COPY IDXlib FROM '${pathToCSV}' 
      WITH DELIMITER ',' 
      CSV HEADER;
      `);
    //----------------------------------------------------------------
    console.log("Populating Intial Users Carts")
    const user1Cart = await cartDB.createUserCart_DB(1)
    const user2Cart = await cartDB.createUserCart_DB(2)
    const user3Cart = await cartDB.createUserCart_DB(3)
    const user4Cart = await cartDB.createUserCart_DB(4)
    const user5Cart = await cartDB.createUserCart_DB(5)
    //----------------------------------------------------------------
    console.log("Populating Intial Users Carts")
    const user1CartItem1 = await cartDB.addToCartItems_DB(1, {
      "id": 8,
      "name": "Shang-Chi and the Legend of the Ten Rings",
      "type": "movie",
      "year": 2021,
      "genre": "Fantasy / Action",
      "length": 212,
      "price": "$3.99",
      "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4q-3DRHJ_mIeRpY8itjj58cYh6RdkMNYZeqWO6WbKsEaxwVEKgiJyGdbyiKGDETwFJzk&usqp=CAU"
    })
    const user1CartItem2 = await cartDB.addToCartItems_DB(1, {
      "id": 12,
      "name": "Run",
      "type": "movie ",
      "year": 2020,
      "genre": "Thriller",
      "length": 130,
      "price": "$4.99",
      "img": "https://fr.web.img2.acsta.net/pictures/21/06/25/17/30/1095745.jpg"
    })
    const user5CartItem1 = await cartDB.addToCartItems_DB(5, {
      "id": 13,
      "name": "Redeeming Love",
      "type": "movie ",
      "year": 2022,
      "genre": "Western/Romance",
      "length": 214,
      "price": "$5.99",
      "img": "https://m.media-amazon.com/images/M/MV5BMTMxMmRmMWUtNGNhZS00MWYxLTkwNzUtM2QwNzI4MGU1ZTI2XkEyXkFqcGdeQXVyNTQ3MjE4NTU@._V1_.jpg"
    })
    const user5CartItem2 = await cartDB.addToCartItems_DB(5, {
      "id": 15,
      "name": "Cyrano",
      "type": "movie ",
      "year": 2021,
      "genre": "Romance",
      "length": 203,
      "price": "$5.99",
      "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSod_b_CNpKDrlfF2F0cpjZwcWvpE59hzKcziP0K4TkjfiM8zLQGD1uxU19PzYhrEQZyfA&usqp=CAU"
    })
    //----------------------------------------------------------------
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