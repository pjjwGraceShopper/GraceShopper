// Connect to DB
const { Client } = require('pg');
require("dotenv").config();
const LOGIN = process.env.REACT_APP_DB_login;
const DB_NAME = 'blueBox';
let client
const DB_URL = process.env.DATABASE_URL || `postgres://localhost:5432/${DB_NAME}`;

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
// client = new Client({connectionString: process.env.DATABASE_URL || `postgres://${LOGIN}@localhost:5432/${DB_NAME}`,
// ssl: process.env.NODE_ENV === 'production' ? { rejectUnauthorized: false } : undefined});

module.exports = client;
