let express = require("express");
let router = express.Router();

const { createEvent, getEvents } = require("../controllers/eventController.js");

router.post("/event/createEvent", createEvent);
router.get("/event/getAllEvents", getEvents);

module.exports = router;
