const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
const UserService = require("../services/userService");

dotenv.config();

function generateAccessToken(username, role) {
  return jwt.sign({ username, role }, process.env.TOKEN_SECRET, {
    expiresIn: "1800s",
  });
}

const signUp = async function (req, res) {
  try {
    const result = await UserService.saveUser(
      req.body.email,
      req.body.password,
      "user"
    );

    const token = generateAccessToken(result.email, result.role);

    res.status(200).json(token);
  } catch (e) {
    console.log("ERROR", e);
    res.status(400).send(e);
  }
};

const logIn = async (req, res) => {
  try {
    const user = await UserService.getUserByEmail(
      req.body.email,
      req.body.password
    );
    const token = generateAccessToken(user.email, user.role);
    res.status(200).json(token);
  } catch (e) {
    console.log("ERROR", e);
    res.status(400).send(e);
  }
};

module.exports = {
  signUp,
  logIn,
};
