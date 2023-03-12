const express = require("express");
const {
  createRoom,
  updateRoom,
  deleteRoom,
  getSingleRoom,
  getAllRooms,
} = require("../controllers/rooms");
const { verifyAdmin, verifyToken } = require("../utils/verifyToken");

const RoomRouter = express.Router();

//create
RoomRouter.post("/:hotelid", verifyAdmin, createRoom);
//update
RoomRouter.put("/:id", verifyAdmin, updateRoom);
//Delete
RoomRouter.delete("/:id/:hotelid", verifyAdmin, deleteRoom);
//Get
RoomRouter.get("/:id", getSingleRoom);
//Get All
RoomRouter.get("/", getAllRooms);

module.exports = { RoomRouter };
