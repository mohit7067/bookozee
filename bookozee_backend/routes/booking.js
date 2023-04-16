const {
  createBooking,
  getUserBookings,
  deleteUserBookings,
} = require("../controllers/booking");
const express = require("express");
const BookingRouter = express.Router();
BookingRouter.post("/", createBooking);
BookingRouter.get("/:id", getUserBookings);
BookingRouter.delete("/remove/:id", deleteUserBookings);

module.exports = { BookingRouter };
