const express = require("express");
const libRouter = express.Router();
const { library } = require("../db/models");

libRouter.get("/", async (req, res, next) => {
  try {
    const data = await library.getLibrary();
    res.status(200).send(data);
  } catch (err) {
    res.status(500).send;
  } finally {
    next();
  }
});

libRouter.post("/new", async (req, res, next) => {
  const { name, type, year, genre, length, price, img } = req.body 
  try {
    const data = await library.addMovie(name, type, year, genre, length, price, img);
    res.status(200).send(data);
  } catch (err) {
    res.status(500).send;
  } finally {
    next();
  }
});

module.exports = libRouter;
