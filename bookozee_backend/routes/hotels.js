const express = require("express");
const {
  createHotel,
  updateHotel,
  deleteHotel,
  getSingleHotel,
  getAllHotels,
  countByCity,
  countByType,
  getHotelRooms,
} = require("../controllers/hotels");
const { verifyAdmin } = require("../utils/verifyToken");

const HotelRouter = express.Router();

//create
HotelRouter.post("/", verifyAdmin, createHotel);
//update
HotelRouter.put("/:id", verifyAdmin, updateHotel);
//Delete
HotelRouter.delete("/:id", verifyAdmin, deleteHotel);
//Get
HotelRouter.get("/find/:id", getSingleHotel);
//Get All
HotelRouter.get("/", getAllHotels);
HotelRouter.get("/countByCity", countByCity);
HotelRouter.get("/countByType", countByType);
HotelRouter.get("/room/:id", getHotelRooms);

module.exports = { HotelRouter };
