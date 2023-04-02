const { HotelModel } = require("../models/hotels");
const { RoomModel } = require("../models/rooms");
const createRoom = async (req, res, next) => {
  const hotelId = req.params.hotelid;
  const newRoom = new RoomModel(req.body);

  try {
    const savedRoom = await newRoom.save();
    try {
      await HotelModel.findByIdAndUpdate(hotelId, {
        $push: { rooms: savedRoom._id },
      });
    } catch (error) {
      next(error);
    }
    res.status(200).json(savedRoom);
  } catch (error) {
    next(error);
  }
};
const updateRoom = async (req, res, next) => {
  try {
    const updateRoom = await RoomModel.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updateRoom);
  } catch (error) {
    next(error);
  }
};
const updateRoomAvailability = async (req, res, next) => {
  try {
    await RoomModel.updateOne(
      { "roomNumbers._id": req.params.id },
      { $push: { "roomNumbers.$.unavailableDates": req.body.dates } }
    );
    res.send("room updates with unavailabel dates !");
  } catch (error) {
    next(error);
  }
};

const deleteRoom = async (req, res, next) => {
  try {
    await RoomModel.findByIdAndDelete(req.params.id);

    res.status(200).send("Room has been  deleted !");
  } catch (error) {
    next(error);
  }
};
const getSingleRoom = async (req, res, next) => {
  try {
    const room = await RoomModel.findById(req.params.id);
    res.status(200).send(room);
  } catch (error) {
    next(error);
  }
};
const getAllRooms = async (req, res, next) => {
  try {
    const rooms = await RoomModel.find();
    res.status(200).send(rooms);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  createRoom,
  updateRoom,
  deleteRoom,
  getAllRooms,
  getSingleRoom,
  updateRoomAvailability,
};
