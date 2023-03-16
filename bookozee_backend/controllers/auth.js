const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { UserModel } = require("../models/user");
const { createError } = require("../utils/error");
require("dotenv").config();

const Register = async (req, res, next) => {
  const { username, email, password } = req.body;
  try {
    await bcrypt.genSalt(10, function (err, salt) {
      bcrypt.hash(password, salt, async function (err, hash) {
        const newUser = new UserModel({
          username,
          email,
          password: hash,
        });
        await newUser.save();
        const { password, ...userDetails } = newUser._doc;
        res.status(201).send(userDetails);
      });
    });
  } catch (error) {
    next(createError(404, "username or email is already exists !"));
  }
};
const Login = async (req, response, next) => {
  const { email, password } = req.body;
  try {
    const user = await UserModel.findOne({ email });
    if (!user) return next(createError(404, "user not found !"));

    await bcrypt.compare(password, user.password, function (err, res) {
      if (res) {
        var token = jwt.sign(
          { id: user._id, isAdmin: user.isAdmin },
          process.env.jwt_key
        );
        const { password, isAdmin, ...otherDetails } = user._doc;
        response
          .cookie("access_token", token, {
            httpOnly: true,
          })
          .status(200)
          .json(otherDetails);
      } else {
        next(createError(403, "Wrong username or password !"));
      }
    });
  } catch (error) {
    next(error);
  }
};

module.exports = { Register, Login };
