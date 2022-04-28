const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
const EventService = require("../services/eventService");

dotenv.config();

const createEvent = async function (req, res) {
  try {
    const event = await EventService.createEvent(req.body);
    console.log(event);
    res.status(200).send(event);
  } catch (e) {
    console.log("ERROR", e);
  }
};

module.exports = {
  createEvent,
};
