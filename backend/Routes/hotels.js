const express = require("express");
const Hotel = require("../models/hotels.js");
const hotelsRouter = express.Router();

//create new hotel
hotelsRouter.post("/", async (req, res, next) => {
  //
  try {
    const newHotel = new Hotel(req.body);
    const insrtedHotel = await newHotel.save();
    res.status(201).json(insrtedHotel);
  } catch (error) {
    error.status = 500;
    next(error);
  }
});

// uodate hotel details

hotelsRouter.put("/:id", async (req, res, next) => {
  //
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
});

// delete one hotel :

hotelsRouter.delete("/:id", async (req, res, next) => {
  //
  try {
    await Hotel.findByIdAndDelete(req.params.id);
    res.status(200).json("Hotel deleted successfully");
  } catch (error) {
    error.status = 400;
    next(error);
  }
});
// get hotels
hotelsRouter.get("/", async (req, res, next) => {
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
});

// get one hotel
hotelsRouter.get("/:id", async (req, res, next) => {
  //
  try {
    const hotel = await Hotel.findById(req.params.id);
    res.status(200).json(hotel);
  } catch (error) {
    console.log(error);
    error.status = 400;
    next(error);
  }
});

//
module.exports = { hotelsRouter };
