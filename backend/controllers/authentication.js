const User = require("../models/user.js");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

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
    var { username, password } = req.body;
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
    //create token:
    var { password, isAdmin, ...clientDetails } = user._doc;
    const secretKey = process.env.JWT_SECRET_KEY;
    const token = jwt.sign({ id: user._id, isAdmin: isAdmin }, secretKey);

    // send resposne and add token to cookies
    res
      .cookie("access_token", token, {
        httpOnly: true,
      })
      .status(200)
      .json({
        clientDetails,
        msg: "the user is successfully authenticated",
      });
  } catch (error) {
    next(error);
  }
};

module.exports = { register, login };
