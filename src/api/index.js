const express = require("express");
const router = express.Router();
const authRouter = require("./auth");
const usersRouter = require("./users");
const testRouter = require("./test")

// GET /api/health
router.get("/health", (req, res) => {
  res.status(200).json({
    status: "success",
    message: "OK",
  });
});

// Router /auth
router.use("/auth", authRouter);

// Router /users
router.use("/users", usersRouter);




// ENDPOINT INDEX

router.get("/", (req, res) => {
  res.json({
    message: "Welcome to my App",
  })}
)


// Rouer /api/test

router.use("/test", testRouter)


module.exports = router;
