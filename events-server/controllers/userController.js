const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
const userModel = require("../models/userModel");
dotenv.config();

function generateAccessToken(username) {
  return jwt.sign(username, process.env.TOKEN_SECRET, { expiresIn: "1800s" });
}

// let testUser = new userModel({
//   email: "test@test.com",
//   password: "1234",
//   role: "user",
// });

const signUp = (req, res) => {
  const newUser = userModel({
    email: req.body.email,
    password: req.body.password,
    role: "user",
  });

  newUser
    .save()
    .then((doc) => {
      console.log(doc);
    })
    .catch((err) => {
      console.error(err);
    });

  res.status(201).json(newUser);

  console.log(newUser);
  const token = generateAccessToken({ username: newUser.email });
  res.json(token);
};

const logIn = (req, res) => {
  const user = {
    email: req.body.email,
    password: req.body.password,
  };

  console.log(user);

  res.status(201).json(user);
};

module.exports = {
  signUp,
  logIn,
};
