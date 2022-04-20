const {
  client, User
  // declare your model imports here
  // for example, User
} = require('./');

//----------------------------------------------------------------
async function buildTables() {
  try {
    client.connect();

    // drop tables in correct order
    client.query(`
    DROP TABLE cart
    DROP TABLE movies
    DROP TABLE IDXlib
    DROP TABLE users
    `)
    // build tables in correct order

    client.query(`
   
    CREATE TABLE users
    (
    id INTEGER PRIMARY KEY,
    name text,
    username varchar(30) NOT NULL,
    password varchar(50) NOT NULL
    );
         
    CREATE TABLE idxlib
    (
    id INT primary key,
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
      id INTEGER PRIMARY KEY,
      "idx_id" INTEGER REFERENCES idxlib(id) NOT NULL,
      link TEXT NOT NULL
    );

    CREATE TABLE cart 
    (
      id INTEGER PRIMARY KEY,
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
  try {
    // create useful starting data by leveraging your
    // Model.method() adapters to seed your db, for example:
    // const user1 = await User.createUser({ ...user info goes here... })


    // const user1 = await User.createUser({name:`Sam`, username:`Samantha1234`, password:`fuzzybunnies`})
    // const user2 = await User.createUser({name:`Fin`, username:`FinTastically`, password: `bigpurpledinosaur`})
  //   const popIdx = await client.query 
  //   (`
  // COPY IDXlib FROM  Q:\\0.CodeProjects-Windows\\FScoursework\\capstone\\GraceShopper\\starterCSVdata\\moviesDBCSV.csv
  // WITH DELIMITER ',' 
  // CSV HEADER;
  // `)
  } catch (error) {
    throw error;
  }
}

buildTables()
  .then(populateInitialData)
  .catch(console.error)
  .finally(() => client.end());
