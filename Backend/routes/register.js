const express = require("express");
const router = express.Router();
const User = require("../Models/userSchema");
router.use(express.json());

router.get("/", (req, res) => {
  res.send("hi");
  // console.log("h");
});

router.post("/", (req, res) => {
  console.log(req.body);
  const newUser = new User({
    email: req.body.email,
    password: req.body.password,
  });
  newUser.save((err) => {
    if (err) {
      console.log(err);
    }
  });
});

module.exports = router;
