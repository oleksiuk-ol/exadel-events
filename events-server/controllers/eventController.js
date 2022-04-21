const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
const EventService = require("../services/eventService");

dotenv.config();

const createEvent = async function (req, res) {
  // try{
  //     const event = await EventService.createEvent(

  //     )
  // }
  console.log(req.body);
};

module.exports = {
  createEvent,
};
