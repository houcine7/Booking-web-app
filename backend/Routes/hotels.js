const express = require("express");
const {
  createHotel,
  updateHotel,
  deleteHotel,
  getHotels,
  getHotelById,
} = require("../controllers/hotel.js");

const hotelsRouter = express.Router();

//create new hotel
hotelsRouter.post("/", createHotel);

// uodate hotel details

hotelsRouter.put("/:id", updateHotel);

// delete one hotel :

hotelsRouter.delete("/:id", deleteHotel);
// get hotels
hotelsRouter.get("/", getHotels);

// get one hotel
hotelsRouter.get("/:id", getHotelById);

//
module.exports = { hotelsRouter };
