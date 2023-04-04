const { RoomModel } = require("../models/rooms");

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
  const { min, max, city, featured, ...others } = req.query;
  try {
    if (city) {
      const hotels = await HotelModel.find({
        city: { $regex: city, $options: "i" },
        cheapestPrice: { $gt: min || 1, $lt: max || 9999999 },
      }).limit(req.query.limit);
      res.status(200).json(hotels);
    } else if (featured) {
      const hotels = await HotelModel.find({
        featured: true,
        cheapestPrice: { $gt: min || 1, $lt: max || 9999999 },
      }).limit(req.query.limit);
      res.status(200).json(hotels);
    } else {
      const hotels = await HotelModel.find({
        ...others,
        cheapestPrice: { $gt: min || 1, $lt: max || 9999999 },
      }).limit(req.query.limit);
      res.status(200).json(hotels);
    }
  } catch (err) {
    next(err);
  }
};
const countByCity = async (req, res, next) => {
  const cities = req.query.cities.split(",");
  try {
    const list = await Promise.all(
      cities.map((city) => {
        return HotelModel.countDocuments({
          city: { $regex: city, $options: "i" },
        });
      })
    );
    res.status(200).send(list);
  } catch (error) {
    next(error);
  }
};
const countByType = async (req, res, next) => {
  try {
    const hotelsCount = await HotelModel.countDocuments({ type: "hotel" });
    const apartmentsCount = await HotelModel.countDocuments({
      type: "apartment",
    });
    const resortsCount = await HotelModel.countDocuments({ type: "resort" });
    const villasCount = await HotelModel.countDocuments({ type: "villa" });
    const cabinsCount = await HotelModel.countDocuments({ type: "cabin" });
    const cottagesCount = await HotelModel.countDocuments({ type: "cottage" });
    const glampingCount = await HotelModel.countDocuments({ type: "glamping" });
    const servicedApartmentCount = await HotelModel.countDocuments({
      type: "servicedapartment",
    });
    const vacationHomesCount = await HotelModel.countDocuments({
      type: "vacationhome",
    });
    const guestHousesCount = await HotelModel.countDocuments({
      type: "guesthouse",
    });
    const HostelsCount = await HotelModel.countDocuments({ type: "hostel" });

    res.status(200).json([
      { type: "Hotels", count: hotelsCount },
      { type: "Apartments", count: apartmentsCount },
      { type: "Resorts", count: resortsCount },
      { type: "Villas", count: villasCount },
      { type: "Cabins", count: cabinsCount },
      { type: "Cottages", count: cottagesCount },
      { type: "Glamping Sites", count: glampingCount },
      { type: "Serviced Apartments", count: servicedApartmentCount },
      { type: "Vacation Homes", count: vacationHomesCount },
      { type: "Guest Houses", count: guestHousesCount },
      { type: "Hostels", count: HostelsCount },
    ]);
  } catch (error) {
    next(error);
  }
};

const getHotelRooms = async (req, res, next) => {
  try {
    const hotel = await HotelModel.findById(req.params.id);
    const list = await Promise.all(
      hotel.rooms.map((room) => {
        return RoomModel.findById(room);
      })
    );

    res.status(200).json(list);
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
  countByCity,
  countByType,
  getHotelRooms,
};
