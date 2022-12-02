const Favorite = require("../Models/favoriteSchema");

const getFav = async (req, res) => {
  await Favorite.findById(req.params.id)
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      console.log(err);
    });
};

const getAllFav = async (req, res) => {
  await Favorite.find()
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      console.log(err);
    });
};

const addFav = async (req, res) => {
  const favorite = new Favorite({
    text: req.body.text,
    counter: req.body.counter,
    selectC: req.body.selectC,
    isChecked: req.body.isChecked,
    id: req.body.id,
  });
  // console.log(req.params.id);
  favorite.save(); // Add new coffee order
};
const addById = async (req, res) => {
  const favorite = new Favorite({
    id: req.params.id,
  });
  console.log(req.params.id);
  favorite.save(); // Add new coffee order
};

const deleteFav = async (req, res) => {
  console.log("hello from DELETE req");
  console.log(req.params.id);
  const result = await Favorite.deleteOne({ id: req.params.id });
  console.log(result);
};
const deleteFavParams = async (req, res) => {
  console.log("hello from DELETE req");
  console.log(req.params.id);
  const result = await Favorite.deleteOne({ id: req.params.id });
  console.log(result);
};
module.exports = {
  deleteFav,
  addFav,
  getAllFav,
  getFav,
  deleteFavParams,
  addById,
};
