const mongoose = require("mongoose");

const CoffeeSchema = new mongoose.Schema({
  text: String,
  counter: Number,
  selectC: String,
  isChecked: Boolean,
  id: String,
});
const Coffee = mongoose.model("CoffeeDatabase", CoffeeSchema);

module.exports = Coffee;
