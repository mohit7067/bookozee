const { UserModel } = require("../models/user");
const bcrypt = require("bcryptjs");

const updateUser = async (req, res, next) => {
  try {
    if (req.body.password) {
      try {
        bcrypt.genSalt(10, function (err, salt) {
          bcrypt.hash(req.body.password, salt, async function (err, hash) {
            const updateUser = await UserModel.findByIdAndUpdate(
              req.params.id,
              {
                $set: { password: hash },
              },
              { new: true }
            );
            const { password, isAdmin, ...otherOption } = updateUser._doc;
            res.status(200).json(otherOption);
          });
        });
      } catch (er) {
        console.log(er);
        next(er);
      }
    } else {
      const updateUser = await UserModel.findByIdAndUpdate(
        req.params.id,
        {
          $set: req.body,
        },
        { new: true }
      );
      const { password, isAdmin, ...otherOption } = updateUser._doc;
      res.status(200).json(otherOption);
    }
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
    if (req.query.stats) {
      const data = await UserModel.aggregate([
        {
          $project: {
            month: { $month: "$createdAt" },
          },
        },
        {
          $group: {
            _id: "$month",
            total: { $sum: 1 },
          },
        },
      ]);

      res.status(200).send(data);
    } else {
      const users = await UserModel.find({}, { password: 0, isAdmin: 0 });
      res.status(200).send(users);
    }
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
