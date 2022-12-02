const express = require("express");
const router = express.Router();
const Coffee = require("../Models/coffeeSchema");
const {
  getAllUsers,
  getSingelMember,
  deleteSingelMember,
} = require("./../controllers/userController");
// Get All Users
router.get("/", getAllUsers);
// Get Singel Member
router.get("/:id", getSingelMember);
// Delete Singel Member
router.delete("/:id", deleteSingelMember);

module.exports = router;
