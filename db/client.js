// Connect to DB
const { Client } = require('pg');
require("dotenv").config();
const LOGIN = process.env.REACT_APP_DB_LOGIN;
//----------------------------------------------------------------
const DB_NAME = 'blueBox'
let DB_LINK
if (!LOGIN){
  DB_LINK = `postgres://localhost:5432/${DB_NAME}`;
} else {
  DB_LINK = `postgres://${LOGIN}@localhost:5432/${DB_NAME}`;
}
//----------------------------------------------------------------
let client

const DB_URL = {connectionString: process.env.DATABASE_URL || `${DB_LINK}`,
ssl: process.env.NODE_ENV === 'production' ? { rejectUnauthorized: false } : undefined};

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