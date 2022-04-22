const express = require("express");
const cartRouter = express.Router();
const {cartDB} = require('../db/index')
// const { getUserCart_DB } = require('../db/models/cartDB')

//----------------------------------------------------------------


//----------------------------------------------------------------  
cartRouter.get('/:user', async (req, res, next) => {
const userid = req.params.user

  try{
  const data = await cartDB.getUserCart_DB(userid)
  res.status(200).send(data)
  } catch (err) {
    res.status(500).send
  } finally {
    next();
    }
    

});

// res.status(300).send({
//     message: 'API is under construction!',
//   });


//----------------------------------------------------------------
module.exports = cartRouter