const Hotel = require("../models/hotels.js");

const createHotel = async (req, res, next) => {
  //
  try {
    const newHotel = new Hotel(req.body);
    const insrtedHotel = await newHotel.save();
    res.status(201).json(insrtedHotel);
  } catch (error) {
    error.status = 500;
    next(error);
  }
};

const deleteHotel = async (req, res, next) => {
  //
  try {
    await Hotel.findByIdAndDelete(req.params.id);
    res.status(200).json("Hotel deleted successfully");
  } catch (error) {
    error.status = 400;
    next(error);
  }
};

const updateHotel = async (req, res, next) => {
  try {
    const updatedHotel = await Hotel.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updatedHotel);
  } catch (e) {
    //
    console.log(e);
    error.status = 400;
    next(error);
  }
};

const getHotels = async (req, res, next) => {
  //
  try {
    //
    const hotels = await Hotel.find();
    res.status(200).json(hotels);
  } catch (error) {
    //
    error.status = 400;
    next(error);
  }
};

const getHotelById = async (req, res, next) => {
  //
  try {
    const hotel = await Hotel.findById(req.params.id);
    res.status(200).json(hotel);
  } catch (error) {
    console.log(error);
    error.status = 400;
    next(error);
  }
};

module.exports = {
  createHotel,
  deleteHotel,
  getHotels,
  getHotelById,
  updateHotel,
};
