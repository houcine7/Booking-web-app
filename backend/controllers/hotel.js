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
    // query parmeters for pagination and data quering
    const cities = req.query.cities && req.query.cities.split(",");
    const sizeTofetch = req.query.size || 5;
    const offset = req.query.offset || 0;
    var hotels;
    //
    if (cities != undefined) {
      //
      hotels = await Promise.all(
        cities.map((item) => {
          // find hotels by cities name
          return Hotel.find({ city: item }).skip(offset).limit(sizeTofetch);
        })
      );
    } else {
      hotels = await Hotel.find().skip(offset).limit(sizeTofetch);
    }
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
    const idHotel = await req.params.id;
    if (idHotel === "count") {
      next();
    } else {
      const hotel = await Hotel.findById(req.params.id);
      res.status(200).json(hotel);
    }
  } catch (error) {
    console.log(error);
    error.status = 400;
    next(error);
  }
};

const getHotelsCount = async (req, res, next) => {
  try {
    // query parmeters for pagination and data quering
    const cities = req.query.cities && req.query.cities.split(",");
    var hotelsCountList;
    //
    if (cities != undefined) {
      //
      hotelsCountList = await Promise.all(
        cities.map(async (item) => {
          // find hotels by cities name
          return { [item]: await Hotel.countDocuments({ city: item }) };
        })
      );
    } else {
      hotelsCountList = await Hotel.countDocuments();
    }
    res.status(200).json(hotelsCountList);
  } catch (error) {
    //
    error.status = 500;
    next(error);
  }
};

module.exports = {
  createHotel,
  deleteHotel,
  getHotels,
  getHotelById,
  updateHotel,
  getHotelsCount,
};
