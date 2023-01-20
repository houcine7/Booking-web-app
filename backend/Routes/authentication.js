const express = require("express");

const authRouter = express.Router();

authRouter.get("/", (req, res) => {
  res.send("hellow from auth route");
});

module.exports = { authRouter };
