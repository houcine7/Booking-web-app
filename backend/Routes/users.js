const express = require("express");

const {
  updateUser,
  deleteUser,
  getUserById,
  getUsers,
} = require("../controllers/user.js");
const {
  verifyUser,
  verifyAdmin,
  verifyToken,
} = require("../utils/jwtUtils.js");
const usersRouter = express.Router();

// update user details

usersRouter.put("/:id", verifyToken, verifyUser, updateUser);

// delete one user :

usersRouter.delete("/:id", verifyToken, verifyUser, deleteUser);
// get users
usersRouter.get("/", verifyToken, verifyAdmin, getUsers);

// get one user
usersRouter.get("/:id", verifyToken, verifyUser, getUserById);

//

//
module.exports = { usersRouter };
