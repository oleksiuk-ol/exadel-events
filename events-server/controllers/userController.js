// const userController = require("../data.js");

const signUp = (req, res) => {
  const newUser = {
    username: req.body.username,
    password: req.body.password,
  };
  console.log(newUser);
  res.status(201).json(newUser);
};

module.exports = {
  signUp,
};
