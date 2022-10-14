const express = require("express");
const router = express.Router();
const User = require("../Models/userSchema");
router.use(express.json());

// Get Singel Member
router.post("/", (req, res) => {
  const username = req.body.email;
  const password = req.body.password;
  User.findOne({ email: username }, function (err, foundUser) {
    if (err) {
      console.log(err);
    } else {
      if (foundUser) {
        //if there is a user exist
        console.log(foundUser);
        if (foundUser.password === password) {
          //render the page that we are trying to acess
          res.send("nice");
          console.log("nice");
        } else {
          console.log("Try Again Wrong Password");
          res.send("Try Again Wrong Password");
        }
      } else {
        console.log("no use found");
        res.send("no use found");
      }
    }
  });
});

module.exports = router;
