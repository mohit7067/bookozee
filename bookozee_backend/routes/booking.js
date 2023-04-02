const {
  createBooking,
  getUserBookings,
  deleteUserBookings,
} = require("../controllers/booking");
const express = require("express");
const { verifyUser } = require("../utils/verifyToken");
const BookingRouter = express.Router();
BookingRouter.post("/", createBooking);
BookingRouter.get("/:id", verifyUser, getUserBookings);
BookingRouter.delete("/remove/:id", verifyUser, deleteUserBookings);

module.exports = { BookingRouter };
