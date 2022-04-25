// const {
//   client
//   // declare your model imports here
//   // for example, User
// } = require('./');

const client = require ('./client')
const {usersDB} = require ('./index')


//----------------------------------------------------------------
async function buildTables() {
  try {
    

    // drop tables in correct order
    await client.query(`
    DROP TABLE IF EXISTS cart;
    DROP TABLE IF EXISTS movies;
    DROP TABLE IF EXISTS idxlib;
    DROP TABLE IF EXISTS users;
    `) 
    // build tables in correct order

    await client.query(`
   
    CREATE TABLE users
    (
    id SERIAL PRIMARY KEY,
    username varchar(255) NOT NULL,
    password varchar(350) NOT NULL
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
      
    `)
  } catch (error) {
    throw error;
  }
}
//----------------------------------------------------------------
async function populateInitialData() {
  console.log("populateInitialData")
  const path = require ('path')
  const pathToCSV = path.join(__dirname, 'internal/MoviesDBCSV.csv')

  try {
  
    const user1 = await usersDB.createUser({username:`Samantha1234`, password:`fuzzybunnies`})
    const user2 = await usersDB.createUser({username:`FinTastically`, password: `bigpurpledinosaur`})
    const user3 = await usersDB.createUser({username:`Ernie`, password: `orange`})
    const popIdx = await client.query 
    (`
  COPY IDXlib FROM '${pathToCSV}' 
  WITH DELIMITER ',' 
  CSV HEADER;
  `)
  } catch (error) {
    throw error;
  }
}


async function rebuildDB() {

  client.connect();
  await buildTables()
  await populateInitialData()
  .then(console.log("successfully rebuilt"))
  .catch(console.error)
  .finally(() => client.end())}
  rebuildDB()