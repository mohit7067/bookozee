const express = require("express");
const {
  Register,
  Login,
  ForgotPassword,
  AdminLogin,
} = require("../controllers/auth");

const AuthRouter = express.Router();

AuthRouter.post("/register", Register);
AuthRouter.post("/login", Login);
AuthRouter.post("/admin/login", AdminLogin);
AuthRouter.put("/forgot-password", ForgotPassword);

module.exports = { AuthRouter };
