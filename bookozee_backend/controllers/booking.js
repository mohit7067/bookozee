const { BookingModel } = require("../models/booking");
const { HotelModel } = require("../models/hotels");

const createBooking = async (req, res, next) => {
  const { userId, hotelId } = req.body;
  try {
    const hotelinfo = await HotelModel.findById(hotelId);
    const newBooking = new BookingModel({ userId, hotelBooking: hotelinfo });

    const savedBooking = await newBooking.save();
    res.status(200).json(savedBooking);
  } catch (error) {
    next(error);
  }
};
const getUserBookings = async (req, res, next) => {
  console.log(req.params.id);
  try {
    const hotels = await BookingModel.find({ userId: req.params.id });
    res.status(200).json(hotels);
  } catch (error) {
    next(error);
  }
};

module.exports = { createBooking, getUserBookings };
