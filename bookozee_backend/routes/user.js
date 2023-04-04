const express = require("express");
const {
  updateUser,
  deleteUser,
  getSingleUser,
  getAllUsers,
} = require("../controllers/user");
const { verifyUser, verifyAdmin } = require("../utils/verifyToken");

const UserRouter = express.Router();

//update
UserRouter.put("/:id", verifyUser, updateUser);
//Delete
UserRouter.delete("/:id", verifyUser, deleteUser);
//Get
UserRouter.get("/:id", verifyUser, getSingleUser);
//Get All
UserRouter.get("/", verifyAdmin, getAllUsers);
//get stats

module.exports = { UserRouter };
