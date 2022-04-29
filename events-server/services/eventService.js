const EventModel = require("../models/eventModel");

exports.createEvent = async function (eventData) {
  try {
    const newEvent = EventModel({
      name: eventData.name,
      description: eventData.description,
      startDate: eventData.startDate,
      endDate: eventData.endDate,
      type: eventData.type,
      address: eventData.address,
    });
    await newEvent.save();
    return newEvent;
  } catch (e) {
    throw Error("Some error with createEvent");
  }
};

exports.getAllEvents = async function () {
  try {
    const events = await EventModel.find();
    return events;
  } catch (e) {
    throw Error("Some error with getAllEvents");
  }
};
