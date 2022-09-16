var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var UserSchema = new Schema({
  count: String,
  clintName: String,
});

//export our module to use in server.js
const User = mongoose.model("Comment", UserSchema);
module.exports = User;
// module.exports = mongoose.model("User", UserSchema);
