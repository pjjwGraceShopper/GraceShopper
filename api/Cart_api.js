const express = require("express");
const cartRouter = express.Router();
const {cartDB} = require('../db/index')

//----------------------------------------------------------------


//----------------------------------------------------------------  
// retrieves the full cart list
cartRouter.get('/:userid', async (req, res, next) => {
const userID = req.params.userid

  try{
  const data = await cartDB.getUserCart_DB(userID)
  res.status(200).send(data)
  } catch (err) {
    res.status(500).send
  } finally {
    next();
    }
});
//----------------------------------------------------------------
// for use in cart indicator
cartRouter.get('/:userid/idx', async (req, res, next) => {
  const userID = req.params.userid
    try{
    const data = await cartDB.getUserCartIdx_DB(userID)
    res.status(200).send(data)
    } catch (err) {
      res.status(500).send
    } finally {
      next();
      }
  });
//----------------------------------------------------------------
cartRouter.post('/:userid/add', async (req, res, next) => {
  const userID = req.params.userid
  const {item} = req.body
  try{
    const data = await cartDB.addToCartItems_DB(userID, item)
    res.status(200).send(data)
} catch (err) {
    res.status(500).send
} finally {
    next();
  }
});
//----------------------------------------------------------------
cartRouter.post('/:userid/delete', async (req, res, next) => {
  const userID = req.params.userid
  const {item} = req.body
  try{
    const data = await cartDB.deleteCartItem_DB(userID, item)
    res.status(200).send(data)
} catch (err) {
    res.status(500).send
} finally {
    next();
  }
});
//----------------------------------------------------------------
cartRouter.post('/:userid/clear', async (req, res, next) => {
  const userID = req.params.userid
  try{
    const data = await cartDB.updateCart_DB(userID, {items: {}})
    res.status(200).send(data)
} catch (err) {
    res.status(500).send
} finally {
    next();
  }
});
//----------------------------------------------------------------
cartRouter.post('/:userid/create', async (req, res, next) => {
  const userID = req.params.userid
  try{
    const data = await cartDB.createUserCart_DB(userID)
      res.status(200).send()
    } catch (err) {
        res.status(500).send
    } finally {
        next();
      }
    });
//----------------------------------------------------------------
module.exports = cartRouter
