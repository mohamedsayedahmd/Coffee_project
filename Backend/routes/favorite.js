const express = require("express");
const router = express.Router();
const Favorite = require("../Models/favoriteSchema");
const {
  deleteFav,
  addFav,
  getAllFav,
  getFav,
  deleteFavParams,
  addById,
} = require("./../controllers/favoriteController");
router.use(express.json());

// Get All Favorites
router.get("/", getAllFav);
// Get Singel Favorite
router.get("/:id", getFav);
//create new id
router.post("/:id", addById);
// Delete Singel Member
router.delete("/:id", deleteFavParams);
// Add a new Fav
router.post("/", addFav);
// Delete Singel Member
router.delete("/:_id", deleteFav);

module.exports = router;
