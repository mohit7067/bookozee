const mongoose = require("mongoose");

const RoomSchema = mongoose.Schema(
  {
    title: { type: String, required: true },
    subTitle: { type: String, required: true },
    price: { type: Number, required: true },
    maxPeople: { type: String, required: true },
    desc: { type: String, required: true },
    roomNumbers: [{ number: Number, unavailableDates: { type: [Date] } }],
  },
  { timestamps: true }
);

const RoomModel = mongoose.model("room", RoomSchema);

module.exports = { RoomModel };
