const express = require("express");
const { Register, Login } = require("../controllers/auth");

const AuthRouter = express.Router();

AuthRouter.post("/register", Register);
AuthRouter.post("/login", Login);

module.exports = { AuthRouter };
