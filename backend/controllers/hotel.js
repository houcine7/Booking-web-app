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
    const minPrice = req.query.min || 0;
    const maxPrice = req.query.max || Number.MAX_SAFE_INTEGER;
    const featured = req.query.featured || false;
    var hotels;
    //
    if (cities != undefined) {
      //
      hotels = await Promise.all(
        cities.map((item) => {
          // find hotels by cities name
          return Hotel.find({
            city: item,
            cheapestPrice: { $gt: minPrice, $lt: maxPrice },
            featured: featured,
          })
            .skip(offset)
            .limit(sizeTofetch);
        })
      );
    } else {
      hotels = await Hotel.find({
        cheapestPrice: { $gt: minPrice, $lt: maxPrice },
        featured: featured,
      })
        .skip(offset)
        .limit(sizeTofetch);
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
    if (idHotel === "count" || idHotel === "types-count") {
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

// count hotels by citites :
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

// count hotels by types :
const getHotelsTypeCount = async (req, res, next) => {
  const typesMap = {
    type0: "hotel",
    type1: "appartement",
    type2: "villa",
    type3: "reort",
  };
  try {
    // query parmeters for pagination and data quering
    const hotelCountP = Hotel.countDocuments({ type: typesMap.type0 });
    const appartementCountP = Hotel.countDocuments({
      type: typesMap.type1,
    });
    const villasCountP = Hotel.countDocuments({ type: typesMap.type2 });
    const ReortsCountP = Hotel.countDocuments({ type: typesMap.type3 });

    const responsesDb = await Promise.all([
      hotelCountP,
      appartementCountP,
      villasCountP,
      ReortsCountP,
    ]);
    var response = [];
    // get valuse from response db
    for (let i = 0; i < responsesDb.length; i++) {
      const key = "type" + i;
      const type = typesMap[key];
      // create
      response.push({
        typeProp: type,
        count: responsesDb[i],
      });
    }

    res.status(200).json(response);
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
  getHotelsTypeCount,
};
