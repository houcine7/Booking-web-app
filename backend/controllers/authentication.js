const User = require("../models/user.js");
const bcrypt = require("bcryptjs");
const { authRouter } = require("../Routes/authentication.js");

// add new user
const register = async (req, res, next) => {
  //
  try {
    const { username, email, password } = req.body;
    // hash the password
    const salt = bcrypt.genSaltSync(10);
    const hashedPassword = bcrypt.hashSync(password, salt);

    // create new user
    const newUser = new User({
      username: username,
      email: email,
      password: hashedPassword,
    });
    //save user to db
    await newUser.save();
    // send success response
    res.status(201).json("user created successfully");
  } catch (error) {
    error.status = 400;
    return next(error);
  }
};

// sing in a user

const login = async (req, res, next) => {
  //
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ username: username });
    if (!user) {
      const error = new Error("this user name does not exist");
      error.status = 404;
      return next(error);
    } else {
      const isPasswordCorrect = await bcrypt.compare(password, user.password);

      if (!isPasswordCorrect) {
        const error = new Error("the password is incorrect");
        error.status = 400;
        return next(error);
      }
    }

    //the user informations are correct

    res.status(200).json("the user is successfully authenticated");
  } catch (error) {
    next(error);
  }
};

module.exports = { register, login };
