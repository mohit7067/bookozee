const { UserModel } = require("../models/user");

const updateUser = async (req, res, next) => {
  try {
    const updateUser = await UserModel.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updateUser);
  } catch (error) {
    next(error);
  }
};
const deleteUser = async (req, res, next) => {
  try {
    await UserModel.findByIdAndDelete(req.params.id);
    res.status(200).send("User has been  deleted !");
  } catch (error) {
    next(error);
  }
};
const getSingleUser = async (req, res, next) => {
  try {
    const user = await UserModel.findById(req.params.id);
    res.status(200).send(user);
  } catch (error) {
    next(error);
  }
};
const getAllUsers = async (req, res, next) => {
  try {
    const users = await UserModel.find();
    res.status(200).send(users);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  updateUser,
  getAllUsers,
  getSingleUser,
  deleteUser,
};
