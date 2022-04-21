let express = require("express");
let router = express.Router();

const { createEvent } = require("../controllers/eventController.js");

router.post("/event/createEvent", createEvent);

module.exports = router;
