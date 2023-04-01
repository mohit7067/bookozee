const express = require("express");
const {
  createRoom,
  updateRoom,
  deleteRoom,
  getSingleRoom,
  getAllRooms,
  updateRoomAvailability,
} = require("../controllers/rooms");
const { verifyAdmin, verifyToken } = require("../utils/verifyToken");

const RoomRouter = express.Router();

//create
RoomRouter.post("/:hotelid", verifyAdmin, createRoom);
//update
RoomRouter.put("/:id", verifyAdmin, updateRoom);
RoomRouter.put("/availability/:id", updateRoomAvailability);
//Delete
RoomRouter.delete("/:id", verifyAdmin, deleteRoom);
//Get
RoomRouter.get("/:id", getSingleRoom);
//Get All
RoomRouter.get("/", getAllRooms);

module.exports = { RoomRouter };
