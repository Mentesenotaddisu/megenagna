const mongoose = require("mongoose");
const eventSchema = new mongoose.Schema({
  Eventname: { type: String },
  shortdescription: { type: String },
  description: { type: String },
  Eventregion: { type: String },
  startDate: [{ type: Date }],
  Starttime: { type: String },
  Endtime: { type: String },
  Tag: [{ type: String }],
  image: { type: String },
  location: { type: String },
  phonenumber: { type: String },
});
const Events = mongoose.model("Events", eventSchema);
module.exports = Events;
