let mongoose = require("mongoose");

let userSchema = new mongoose.Schema({
  unique: Boolean,
  email: String,
  password: String,
  role: String,
});

module.exports = mongoose.model("User", userSchema);
