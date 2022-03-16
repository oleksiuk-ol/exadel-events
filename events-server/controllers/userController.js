const signUp = (req, res) => {
  const newUser = {
    email: req.body.email,
    password: req.body.password,
  };
  console.log(newUser);
  res.status(201).json(newUser);
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
