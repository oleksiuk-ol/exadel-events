const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
const userModel = require("../models/userModel");
const bcrypt = require("bcryptjs");

const saltRounds = 10;

dotenv.config();

function generateAccessToken(username) {
  return jwt.sign(username, process.env.TOKEN_SECRET, { expiresIn: "1800s" });
}

const signUp = async (req, res) => {
  const newUser = userModel({
    email: req.body.email,
    password: req.body.password,
    role: "user",
  });

  newUser.password = await bcrypt.hash(newUser.password, saltRounds);
  console.log(newUser);
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

const logIn = async (req, res) => {
  // userModel.findOne({ email: req.body.email }, function (err, docs) {
  //   if (err) {
  //     console.log(err);
  //   } else {
  //     const token = generateAccessToken({
  //       username: docs.email,
  //       role: docs.role,
  //     });
  //     res.json(token);
  //   }
  // });

  const user = await userModel.findOne({ email: req.body.email });

  const validPassword = await bcrypt.compare(req.body.password, user.password);

  console.log(validPassword);
};

module.exports = {
  signUp,
  logIn,
};
