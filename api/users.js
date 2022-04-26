const express = require("express");
const usersRouter = express.Router();
const { usersDB } = require("../db/models");
const { requireUser } = require("./utils");
require("dotenv").config();
const jwt = require("jsonwebtoken");

usersRouter.post("/register", async (req, res, next) => {
  const { username, password, email, firstName, lastName } = req.body;
  console.log("User info:", username, password, email, firstName, lastName);
  try {
    if (password.length >= 8) {
      let _user = await usersDB.getUserByUsername(username);
      if (!_user) {
        const user = await usersDB.createUser({
          username,
          password,
          email,
          firstName,
          lastName,
        });
        const token = jwt.sign(
          {
            id: user.id,
            username,
          },
          process.env.JWT_SECRET
        );
        res
          .status(200)
          .send({ message: "Successfully created a new user", token, user });
      } else {
        next({ name: "UsernameTaken", message: "Username already exists" });
      }
    } else {
      next({ name: "PasswordTooShort", message: "Password too short" });
    }
  } catch (error) {
    next(error);
  } finally {
    next();
  }
});

usersRouter.post("/login", async (req, res, next) => {
  const { username, password } = req.body;
  try {
    const user = await usersDB.getUser({ username, password });
    const token = jwt.sign(
      {
        id: user.id,
        username,
      },
      process.env.JWT_SECRET
    );
    res.send({
      message: "You're logged in!",
      token,
      user,
    });
  } catch (error) {
    next(error);
  } finally {
    next();
  }
});

usersRouter.get("/me", requireUser, async (req, res, next) => {
  try {
    const user = await usersDB.getUserById(req.user.id);
    res.send(user);
  } catch (error) {
    next(error);
  } finally {
    next();
  }
});

module.exports = usersRouter;
