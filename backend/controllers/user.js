const User = require("../models/user");

const deleteUser = async (req, res, next) => {
  //
  try {
    await User.findByIdAndDelete(req.params.id);
    res.status(200).json("user deleted successfully");
  } catch (error) {
    error.status = 400;
    next(error);
  }
};

const updateUser = async (req, res, next) => {
  try {
    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updatedUser);
  } catch (e) {
    //
    console.log(e);
    error.status = 400;
    next(error);
  }
};

const getUsers = async (req, res, next) => {
  //
  try {
    //
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    //
    error.status = 400;
    next(error);
  }
};

const getUserById = async (req, res, next) => {
  //
  try {
    const user = await User.findById(req.params.id);
    res.status(200).json(user);
  } catch (error) {
    console.log(error);
    error.status = 400;
    next(error);
  }
};

module.exports = {
  deleteUser,
  getUsers,
  getUserById,
  updateUser,
};
