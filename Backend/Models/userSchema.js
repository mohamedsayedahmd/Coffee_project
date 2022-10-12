const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  email: String,
  password: String,
});
const User = mongoose.model("UserDatabase", UserSchema); //UserDatabase collection

module.exports = User;
