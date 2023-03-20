const mongoose = require("mongoose");

const BookingSchema = new mongoose.Schema({
  userId: { type: String, required: true },
  hotelBooking: { type: Object, required: true },
});

const BookingModel = mongoose.model("userbooking", BookingSchema);

module.exports = { BookingModel };
