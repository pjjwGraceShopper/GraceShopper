const apiRouter = require("express").Router();
const usersRouter = require("./users");
const cartRouter = require("./Cart_api");
const libRouter = require("./libRouter");
const myLibraryRouter = require("./myLibrary")
const jwt = require("jsonwebtoken");
const { getUserById } = require("../db/models/usersDB");
const { JWT_SECRET } = process.env;
//------------------------------------------------------------------------------
apiRouter.use(async (req, res, next) => {
  const prefix = "Bearer ";
  const auth = req.header("Authorization");

  if (!auth) {
    next();
  } else if (auth.startsWith(prefix)) {
    const token = auth.slice(prefix.length);

    try {
      const { id } = jwt.verify(token, JWT_SECRET);

      if (id) {
        req.user = await getUserById(id);
        next();
      }
    } catch ({ name, message }) {
      next({ name, message });
    }
  } else {
    next({
      name: "AuthorizationHeaderHere",
      message: `Authorization token must start with ${prefix}`,
    });
  }
});
//------------------------------------------------------------------------------
apiRouter.get("/", (req, res, next) => {
  res.send("hi"
  );
  next();
});
//------------------------------------------------------------------------------
apiRouter.get("/health", (req, res, next) => {
  res.send({
    healthy: true,
  });
  next();
});
//----------------------------------------------------------------
apiRouter.use("/cart", cartRouter);
apiRouter.use("/users", usersRouter);
apiRouter.use("/library", libRouter);
apiRouter.use("/mylibrary", myLibraryRouter);
//----------------------------------------------------------------
//.. Error Handler
apiRouter.use((error, req, res, next) => {
  console.log("express error");
  res.send({
    name: error.name,
    message: error.message,
  });
  res.status(500).send({
    name: error.name,
    message: error.message,
  });
});

// place your routers here

module.exports = apiRouter;
