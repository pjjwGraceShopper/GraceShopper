const express = require("express");
const libRouter = express.Router();
const { library } = require("../db/models");

libRouter.put("/", async (req, res, next) => {
  let limit = req.body.limit
  let offset = req.body.offset
  if(!limit){limit=null}
  if(!offset){offset=null}
  try {
    const data = await library.getLibrary(limit, offset);
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

libRouter.patch("/:movieId", async (req, res, next) => {
  const { movieId } = req.params
  const { name, type, year, genre, length, price, img } = req.body 
  const updateObject = {}
  updateObject.id = movieId
  if(name) {
    updateObject.name = name
  }
  if(type) {
    updateObject.type = type
  }
  if(year) {
    updateObject.year = year
  }
  if(genre) {
    updateObject.genre = genre
  }
  if(length) {
    updateObject.length = length
  }
  if(price) {
    updateObject.price = price
  }
  if(img) {
    updateObject.img = img
  }
  try {
    const data = await library.updateMovie(updateObject);
    res.status(200).send(data);
  } catch (err) {
    res.status(500).send;
  } finally {
    next();
  }
});

module.exports = libRouter;
