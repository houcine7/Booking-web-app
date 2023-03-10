const express = require("express");
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");
const cors = require("cors");

const { connectToDb } = require("./config/db");
const { authRouter } = require("./Routes/authentication");
const { hotelsRouter } = require("./Routes/hotels");
const { usersRouter } = require("./Routes/users");
const { roomsRouter } = require("./Routes/rooms");

const app = express();

// environment variables configuration
dotenv.config();

// allow origins

app.use(
  cors({
    origin: "http://localhost:3000",
  })
);
// connction to database
connectToDb();

// Middlewares
app.use(express.json());
app.use(cookieParser());
app.use("/api/auth/", authRouter);
app.use("/api/hotels/", hotelsRouter);
app.use("/api/users", usersRouter);
app.use("/api/rooms", roomsRouter);
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
