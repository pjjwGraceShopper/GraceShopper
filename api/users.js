const express = require("express");
const usersRouter = express.Router();
const { createUser, getUserByUsername, getUser } = require("../db");
const { requireUser } = require("./utils")
const jwt = require("jsonwebtoken");
// const { requireUser } = require("./utils")

usersRouter.post("/register", async (req, res, next) => {
  const { username, password } = req.body;
  try {
    if (password.length >= 8) {
      let _user = await getUserByUsername(username);
      if (!_user) {
        const user = await createUser({ username, password });
        const token = jwt.sign(
          {
            id: user.id,
            username,
          },
          process.env.JWT_SECRET
        );
        res.send({ message: "Successfully created a new user", token, user });
      } else {
        next({ name: "UsernameTaken", message: "Username already exists" });
      }
    } else {
      next({ name: "PasswordTooShort", message: "Password too short" });
    }
  } catch (error) {
    next(error);
  }
});

usersRouter.post("/login", async (req, res, next) => {
  const { username, password } = req.body;
  try {
    const user = await getUser({ username, password });
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
  }
});

usersRouter.get("/me", requireUser, async (req, res, next) => {
  try {
    const user = await getUserById(req.user.id);
    res.send(user);
  } catch (error) {
    next(error);
  }
});

module.exports = usersRouter;
