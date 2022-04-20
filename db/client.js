// Connect to DB
const { Client } = require('pg');
require("dotenv").config();
const LOGIN = process.env.DB_login;
// change the DB_NAME string to whatever your group decides on
const DB_NAME = 'blueBox';

const DB_URL =
  process.env.DATABASE_URL || `postgres://${LOGIN}@localhost:5432/${DB_NAME}`;

let client;

// github actions client config
if (process.env.CI) {
  client = new Client({
    host: 'localhost',
    port: 5432,
    user: 'postgres',
    password: 'postgres',
    database: 'postgres',
  });
} else {
  // local / heroku client config
  client = new Client(DB_URL);
}

module.exports = client;
