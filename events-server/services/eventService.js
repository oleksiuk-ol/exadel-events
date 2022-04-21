const EventModel = require("../models/eventModel");

exports.createEvent = async function (event) {
  try {
    const newEvent = EventModel({
      name: event.name,
      description: event.description,
      startDate: event.startDate,
      endDate: event.endDate,
      type: event.type,
    });
    await newEvent.save();
    return newEvent;
  } catch (e) {
    throw Error("Some error with createEvent");
  }
};
