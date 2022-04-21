const cartRouter = require('express').Router();
// const {cartDB} = require('../db/index')
const {getUserCart_DB} = require('../db/models/cartDB')

//----------------------------------------------------------------


//----------------------------------------------------------------  
cartRouter.get('/:user', async (req, res, next) => {
const userid = req.params.user
  

res.status(200).send
  try{

//   const data = await getUserCart_DB(userid)
//   res.send(data)
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