const usersDB = require("./usersDB");
const library = require("./library");
const cartDB = require("./cartDB");
const myLibraryDB = require("./myLibraryDB");
module.exports = { cartDB, usersDB, library, myLibraryDB };
// add each model to your exports object here
// so that you can use them in your express server api routers
// for example, create a users.js file for a User model
// and User: require('./user') here

// then, in your API, you'll require the appropriate model
// and use its database connectors
// ie User.getUserById(), where user.js had a module.exports
// that looked like this: module.exports = { getUserById, ... }
