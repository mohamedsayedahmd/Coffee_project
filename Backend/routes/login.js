const express = require("express");
const router = express.Router();
const User = require("../Models/userSchema");
const { Login, userLogin } = require("../controllers/loginController");
router.use(express.json());

// router.post("/test", Login);

// Get Singel Member
router.post("/", userLogin);

module.exports = router;
