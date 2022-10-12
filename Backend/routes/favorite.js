const express = require("express");
const router = express.Router();
const Favorite = require("../Models/favoriteSchema");
router.use(express.json());

// Get All Favorites
router.get("/", async (req, res) => {
  await Favorite.find()
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      console.log(err);
    });
});
// Get Singel Favorite
router.get("/:id", async (req, res) => {
  await Favorite.findById(req.params.id)
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      console.log(err);
    });
});
//create new id
router.post("/:id", async (req, res) => {
  const favorite = new Favorite({
    id: req.params.id,
  });
  console.log(req.params.id);
  favorite.save(); // Add new coffee order
});
// Delete Singel Member
router.delete("/:id", async (req, res) => {
  console.log("hello from DELETE req");
  console.log(req.params.id);
  const result = await Favorite.deleteOne({ id: req.params.id });
  console.log(result);
});
router.post("/", async (req, res) => {
  const favorite = new Favorite({
    text: req.body.text,
    counter: req.body.counter,
    selectC: req.body.selectC,
    isChecked: req.body.isChecked,
    id: req.body.id,
  });
  // console.log(req.params.id);
  favorite.save(); // Add new coffee order
});

// Delete Singel Member
router.delete("/:_id", async (req, res) => {
  console.log("hello from DELETE req");
  console.log(req.params.id);
  const result = await Favorite.deleteOne({ id: req.params.id });
  console.log(result);
});

module.exports = router;
