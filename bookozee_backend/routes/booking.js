const { createBooking, getUserBookings } = require("../controllers/booking");
const express = require("express");
const { verifyUser } = require("../utils/verifyToken");
const BookingRouter = express.Router();
BookingRouter.post("/", createBooking);
BookingRouter.get("/:id", verifyUser, getUserBookings);

module.exports = { BookingRouter };
