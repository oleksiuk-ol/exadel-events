let mongoose = require("mongoose");

let eventSchema = new mongoose.Schema({
  name: String,
  description: String,
  startDate: Date,
  endDate: Date,
  type: String,
  address: String,
});

module.exports = mongoose.model("Event", eventSchema);
