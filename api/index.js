const apiRouter = require('express').Router();
const cartRouter = require('./cart_api')

apiRouter.get('/', (req, res, next) => {
  res.send({
    message: 'API is under construction!',
  });
});

apiRouter.get('/health', (req, res, next) => {
  res.send({
    healthy: true,
  });
});

//----------------------------------------------------------------
apiRouter.use('/cart', cartRouter); 

//----------------------------------------------------------------
//.. Error Handler
apiRouter.use((error, req, res, next) => {
  res.send({
    name: error.name,
    message: error.message
  });
res.status(500).send({
  name: error.name,
  message: error.message
});
});

module.exports = apiRouter;
