const express = require("express");
const router = express.Router();
const Coffee = require("../Models/coffeeSchema");
// Get All Users
router.get("/", async (req, res) => {
  await Coffee.find()
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      console.log(err);
    });
});
// Get Singel Member
router.get("/:id", async (req, res) => {
  await Coffee.findById(req.params.id)
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      console.log(err);
    });
});
// Delete Singel Member
router.delete("/:id", async (req, res) => {
  console.log("hello from DELETE req");
  console.log(req.params.id);
  const result = await Coffee.deleteOne({ id: req.params.id });
  console.log(result);
});
module.exports = router;
