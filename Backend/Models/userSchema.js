const mongoose = require("mongoose");
const encrypt = require("mongoose-encryption"); //new level 2

const UserSchema = new mongoose.Schema({
  email: String,
  password: String,
});

// const secret = "Thisisourlittlesecret";
const secret = process.env.SECRET;
UserSchema.plugin(encrypt, { secret: secret, encryptedFields: ["password"] }); //new level 2

const User = mongoose.model("UserDatabase", UserSchema); //UserDatabase collection

module.exports = User;
