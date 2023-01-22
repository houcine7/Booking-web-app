const express = require("express");

const {
  updateUser,
  deleteUser,
  getUserById,
  getUsers,
} = require("../controllers/user.js");
const { verifyUser, verifyAdmin } = require("../utils/jwtUtils.js");
const usersRouter = express.Router();

// update user details

usersRouter.put("/:id", verifyUser, updateUser);

// delete one user :

usersRouter.delete("/:id", verifyUser, deleteUser);
// get users
usersRouter.get("/", verifyAdmin, getUsers);

// get one user
usersRouter.get("/:id", verifyUser, getUserById);

//

//
module.exports = { usersRouter };
