const express = require("express");
const myLibraryRouter = require("express").Router();
const { myLibraryDB } = require("../db/index");
//----------------------------------------------------------------
myLibraryRouter.get('/:userid', async (req, res, next) => {
    const userID = req.params.userid
    
      try{
      const data = await myLibraryDB.getUserLibrary_DB(userID)
      res.status(200).send(data)
      } catch (err) {
        res.status(500).send
      } finally {
        next();
        }
    });
//----------------------------------------------------------------  
myLibraryRouter.post('/:userid/create', async (req, res, next) => {
    const userID = req.params.userid
    
      try{
      const data = await myLibraryDB.createUserLibrary_DB(userID)
      res.status(200).send(data)
      } catch (err) {
        res.status(500).send
      } finally {
        next();
        }
    });
//----------------------------------------------------------------
myLibraryRouter.post('/:userid/add', async (req, res, next) => {
    const userID = req.params.userid
    const {items} = req.body
    console.log(items)
      try{
      const data = await myLibraryDB.addToUserLibrary_DB(userID, items)
      res.status(200).send(data)
      } catch (err) {
        res.status(500).send
      } finally {
        next();
        }
    });
//----------------------------------------------------------------
module.exports = myLibraryRouter