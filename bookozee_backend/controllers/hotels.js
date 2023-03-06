const { HotelModel } = require("../models/hotels");

const createHotel = async (req, res, next) => {
  const newHotel = new HotelModel(req.body);
  try {
    const savedHotel = await newHotel.save();
    res.status(200).json(savedHotel);
  } catch (error) {
    next(error);
  }
};
const updateHotel = async (req, res, next) => {
  try {
    const updateHotel = await HotelModel.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updateHotel);
  } catch (error) {
    next(error);
  }
};
const deleteHotel = async (req, res, next) => {
  try {
    await HotelModel.findByIdAndDelete(req.params.id);
    res.status(200).send("hotel has been  deleted !");
  } catch (error) {
    next(error);
  }
};
const getSingleHotel = async (req, res, next) => {
  try {
    const hotel = await HotelModel.findById(req.params.id);
    res.status(200).send(hotel);
  } catch (error) {
    next(error);
  }
};
const getAllHotels = async (req, res, next) => {
  try {
    const hotels = await HotelModel.find();
    res.status(200).send(hotels);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  createHotel,
  updateHotel,
  getAllHotels,
  getSingleHotel,
  deleteHotel,
};
