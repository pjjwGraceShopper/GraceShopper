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

module.exports = libRouter;
