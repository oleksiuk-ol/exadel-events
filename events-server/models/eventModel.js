let mongoose = require("mongoose");

let eventSchema = new mongoose.Schema({
  name: String,
  description: String,
  startDate: Date,
  endDate: Date,
  type: Boolean,
  address: {
    type: String,
  },
});

module.export = mongoose.model("Event", eventSchema);
