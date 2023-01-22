const jwt = require("jsonwebtoken");

// verify the provided token
const verifyToken = (req, res, next) => {
  //
  const token = req.cookies.access_token;
  if (!token) {
    const err = new Error("You are note athenticated");
    err.status = 401;
    return next(err);
  } else {
    jwt.verify(token, process.env.JWT_SECRET_KEY, (err, user) => {
      //
      if (err) {
        const err = new Error("Token is not valid");
        err.status = 403;
        return next(err);
      } else {
        req.user = user;
        next();
      }
    });
  }
};

// check if user is authorized
const verifyUser = (req, res, next) => {
  //
  if (req.user.id === req.params.id || req.user.isAdmin) {
    next();
  } else {
    const err = new Error("User is not authorized");
    err.status = 403;
    return next(err);
  }
};

// check if user is an admin
const verifyAdmin = (req, res, next) => {
  //
  if (req.user.isAdmin) {
    next();
  } else {
    const err = new Error("User is not authorized");
    err.status = 403;
    return next(err);
  }
};

module.exports = { verifyToken, verifyUser, verifyAdmin };
