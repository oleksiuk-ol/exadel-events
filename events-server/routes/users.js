var express = require("express");
var router = express.Router();

const { signUp } = require("../controllers/userController.js");

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.send("respond with a resource");
});

router.post("/auth/signup", signUp);
// router.post("/auth/login", logIn);

module.exports = router;
