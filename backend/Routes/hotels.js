const express = require("express");
const {
  createHotel,
  updateHotel,
  deleteHotel,
  getHotels,
  getHotelById,
} = require("../controllers/hotel.js");
const { verifyAdmin, verifyToken } = require("../utils/jwtUtils.js");

const hotelsRouter = express.Router();

//create new hotel
hotelsRouter.post("/", verifyToken, verifyAdmin, createHotel);

// uodate hotel details

hotelsRouter.put("/:id", verifyToken, verifyAdmin, updateHotel);

// delete one hotel :

hotelsRouter.delete("/:id", verifyToken, verifyAdmin, deleteHotel);
// get hotels
hotelsRouter.get("/", getHotels);

// get one hotel
hotelsRouter.get("/:id", getHotelById);

//
module.exports = { hotelsRouter };
