const express = require("express");
const {
  getRooms,
  getRoomById,
  updateRoom,
  deleteRoom,
  createRoom,
} = require("../controllers/room");
const { verifyToken, verifyAdmin } = require("../utils/jwtUtils");

//
const roomsRouter = express.Router();

//get all rooms
roomsRouter.get("/", getRooms);
//get one room
roomsRouter.get("/:id", getRoomById);
//update
roomsRouter.put("/:id", verifyToken, verifyAdmin, updateRoom);
//delete
roomsRouter.delete(
  "/:idRoom/hotels/:idHotel",
  verifyToken,
  verifyAdmin,
  deleteRoom
);
//create
roomsRouter.post("/:idHotel", verifyToken, verifyAdmin, createRoom);

module.exports = { roomsRouter };
