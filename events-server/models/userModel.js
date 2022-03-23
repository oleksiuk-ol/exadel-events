let mongoose = require("mongoose");

let userSchema = new mongoose.Schema({
  email: {
    type: String,
    unique: true, // `email` must be unique
  },
  password: String,
  role: String,
});

module.exports = mongoose.model("User", userSchema);
