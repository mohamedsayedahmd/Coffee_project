const express = require("express");
const router = express.Router();
const User = require("../Models/userSchema");
const { Register } = require("./../controllers/registerController");
router.use(express.json());

router.post("/", Register);

router.get("/", (req, res) => {
  res.send("hi");
  // console.log("h");
});

module.exports = router;
