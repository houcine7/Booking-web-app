const mongoose = require("mongoose");

const roomsSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    desc: {
      type: String,
      required: true,
    },
    maxPeople: {
      type: Number,
      required: true,
    },
    roomNumbers: [
      {
        number: { type: Number },
        unvaibleDates: { type: [Date] },
      },
    ],
  },
  { timestamps: true }
);

// roomsNumber =[number:100 ,unvaibleDates:["2020-15-6","2023-12-6","2020-12-6"]]

module.exports = mongoose.model("Room", roomsSchema);
