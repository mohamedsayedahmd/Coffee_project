const Coffee = require("../Models/coffeeSchema");

const getAllUsers = async (req, res) => {
  await Coffee.find()
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      console.log(err);
    });
};
//Get Singel Member
const getSingelMember = async (req, res) => {
  await Coffee.findById(req.params.id)
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      console.log(err);
    });
};
// Delete Singel Member
const deleteSingelMember = async (req, res) => {
  console.log("hello from DELETE req");
  console.log(req.params.id);
  const result = await Coffee.deleteOne({ id: req.params.id });
  console.log(result);
};

module.exports = { getAllUsers, getSingelMember, deleteSingelMember };
