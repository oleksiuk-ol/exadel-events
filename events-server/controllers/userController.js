const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config();

function generateAccessToken(username) {
  return jwt.sign(username, process.env.TOKEN_SECRET, { expiresIn: "1800s" });
}

const signUp = (req, res) => {
  const newUser = {
    email: req.body.email,
    password: req.body.password,
  };

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
