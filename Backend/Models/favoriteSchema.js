const mongoose = require("mongoose");

const FavoriteSchema = new mongoose.Schema({
  text: String,
  counter: Number,
  selectC: String,
  isChecked: Boolean,
  id: String,
});
const Favorite = mongoose.model("FavoriteCoffeeDatabase", FavoriteSchema);

module.exports = Favorite;
