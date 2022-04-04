const UserModel = require("../models/userModel");
const bcrypt = require("bcryptjs");
const saltRounds = 10;

exports.getUserByEmail = async function (email, password) {
  try {
    const user = await UserModel.findOne({ email: email });
    const validPassword = await bcrypt.compare(password, user.password);
    console.log(validPassword);
    if (!validPassword) throw new Error("Wrong password");
    return user;
  } catch (e) {
    throw Error("error");
  }
};

exports.saveUser = async function (email, password, role) {
  try {
    const user = UserModel({
      email: email,
      password: await bcrypt.hash(password, saltRounds),
      role: role,
    });

    await user.save();

    return user;
  } catch (e) {
    throw Error("Some error while saveUser");
  }
};
