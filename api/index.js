const apiRouter = require('express').Router();
const jwt = require("jsonwebtoken");
const { getUserById } = require('../db/users');
const { JWT_SECRET } = process.env

apiRouter.use(async (req, res, next) => {
  const prefix = "Bearer "
  const auth = req.header("Authorization")

  if(!auth){
    next()
  } else if(auth.startsWith(prefix)){
    const token = auth.slice(prefix.length)

    try {
      const { id } =jwt.verify(token, JWT_SECRET)

      if(id) {
        req.user = await getUserById(id)
        next()
      }
    } catch ({name, message}) {
      next({ name, message })
    }
  } else {
    next({
      name: "AuthorizationHeaderHere",
      message: `Authorization token must start with ${prefix}` 
    })
  }
})

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

const usersRouter = require('./users')
apiRouter.use("/users", usersRouter)

// place your routers here

module.exports = apiRouter;
