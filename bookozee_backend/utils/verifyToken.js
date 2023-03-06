const jwt = require("jsonwebtoken");
const { createError } = require("./error");

require("dotenv").config();
const verifyToken = async (req, res, next) => {
  const token = req.cookies.access_token;
  if (!token) {
    return next(createError(401, "You are not authenticated !"));
  }
  await jwt.verify(token, process.env.jwt_key, (err, user) => {
    if (err) return next(createError(403, "Token is not valid !"));
    req.user = user;
    next();
  });
};

const verifyUser = (req, res, next) => {
  verifyToken(req, res, () => {
    if (req.user.id === req.params.id || req.user.isAdmin) {
      next();
    } else {
      return next(createError(403, "Your are not authorized"));
    }
  });
};
const verifyAdmin = (req, res, next) => {
  verifyToken(req, res, () => {
    if (req.user.isAdmin) {
      next();
    } else {
      return next(createError(403, "Your are not authorized"));
    }
  });
};

module.exports = { verifyToken, verifyUser, verifyAdmin };
