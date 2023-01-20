const express = require("express");
const dotenv = require("dotenv");

const { connectToDb } = require("./config/db");
const { authRouter } = require("./Routes/authentication");
const { hotelsRouter } = require("./Routes/hotels");

const app = express();

// environment variables configuration
dotenv.config();

// connction to database
connectToDb();

// Middlewares
app.use(express.json());

app.use("/api/auth/", authRouter);
app.use("/api/hotels/", hotelsRouter);

//error handler middelware
app.use((err, req, res, next) => {
  //
  const errStatus = err.status || 500;
  const errMsg = err.message || "somthing went wrong";

  return res.status(errStatus).json({
    success: false,
    message: errMsg,
  });
});

app.listen(6060, () => {
  console.log("app is listening on port 6060");
});
