const express = require("express");
const router = express.Router();
const User = require("../Models/userSchema");
router.use(express.json());

// Get Singel Member
router.post("/", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  User.findOne({ email: username }, (err, foundUser) => {
    if (err) {
      console.log(err);
    } else {
      if (foundUser) {
        //if there is a user exist
        if (foundUser.password === password) {
          //render the page that we are trying to acess
          //   res.send("secrets");
          console.log("nice");
        }
      }
    }
  });
});

module.exports = router;
