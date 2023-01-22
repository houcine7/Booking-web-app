const Hotels = require("../models/hotels.js");
const Room = require("../models/room.js");

const createRoom = async (req, res, next) => {
  //
  try {
    //hotel id
    const hotelId = req.params.idHotel;
    // create and save Room

    const newRoom = new Room(req.body);
    const insrtedRoom = await newRoom.save();

    // add room to hitel
    await Hotels.findByIdAndUpdate(hotelId, {
      $push: { rooms: insrtedRoom._id },
    });

    // send response
    res.status(201).json(insrtedRoom);
  } catch (error) {
    //handel error
    error.status = 500;
    next(error);
  }
};

const deleteRoom = async (req, res, next) => {
  //
  try {
    await Room.findByIdAndDelete(req.params.idRoom);
    await Hotels.findByIdAndUpdate(req.params.idHotel, {
      $pull: { rooms: req.params.idRoom },
    });
    res.status(200).json("room deleted successfully");
  } catch (error) {
    error.status = 400;
    next(error);
  }
};

const updateRoom = async (req, res, next) => {
  try {
    const updatedRoom = await Room.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updatedRoom);
  } catch (e) {
    //
    console.log(e);
    error.status = 400;
    next(error);
  }
};

const getRooms = async (req, res, next) => {
  //
  try {
    //
    const rooms = await Room.find();
    res.status(200).json(rooms);
  } catch (error) {
    //
    error.status = 400;
    next(error);
  }
};

const getRoomById = async (req, res, next) => {
  //
  try {
    const room = await Room.findById(req.params.id);
    res.status(200).json(room);
  } catch (error) {
    console.log(error);
    error.status = 400;
    next(error);
  }
};

module.exports = {
  createRoom,
  deleteRoom,
  getRooms,
  getRoomById,
  updateRoom,
};
