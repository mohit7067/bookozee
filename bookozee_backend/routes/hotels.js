const express = require("express");
const {
  createHotel,
  updateHotel,
  deleteHotel,
  getSingleHotel,
  getAllHotels,
} = require("../controllers/hotels");
const { verifyAdmin, verifyToken } = require("../utils/verifyToken");

const HotelRouter = express.Router();

//create
HotelRouter.post("/", verifyAdmin, createHotel);
//update
HotelRouter.put("/:id", verifyAdmin, updateHotel);
//Delete
HotelRouter.delete("/:id", verifyAdmin, deleteHotel);
//Get
HotelRouter.get("/:id", verifyToken, getSingleHotel);
//Get All
HotelRouter.get("/", verifyToken, getAllHotels);

module.exports = { HotelRouter };
