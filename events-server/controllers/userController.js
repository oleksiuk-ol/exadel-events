const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
const userModel = require("../models/userModel");
dotenv.config();

function generateAccessToken(username) {
  return jwt.sign(username, process.env.TOKEN_SECRET, { expiresIn: "1800s" });
}

const signUp = (req, res) => {
  const newUser = userModel({
    email: req.body.email,
    password: req.body.password,
    role: "user",
  });

  newUser
    .save()
    .then(() => {
      const token = generateAccessToken({
        username: newUser.email,
        role: newUser.role,
      });
      res.json(token);
    })
    .catch((err) => {
      console.error(err);
    });
};

const logIn = (req, res) => {
  userModel.findOne({ email: req.body.email }, function (err, docs) {
    if (err) {
      console.log(err);
    } else {
      const token = generateAccessToken({
        username: docs.email,
        role: docs.role,
      });
      res.json(token);
    }
  });
};

module.exports = {
  signUp,
  logIn,
};
