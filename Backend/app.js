const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const mongoose = require("mongoose");
app.listen(5000, (req, res) => {
  console.log("server is running");
});
// Connect to database
const db = require("./config/database");
// Get the Coffees Orders
const Coffee = require("./Models/coffeeSchema");
// http://localhost:5000/user
app.use("/user", require("./routes/user"));
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors({ allowedOrigins: ["http://localhost:3000"] }));
app.get("/", (req, res) => {
  res.json({ msg: "get / " });
});
app.post("/", (req, res) => {
  const coffee = new Coffee({
    text: req.body.text,
    counter: req.body.counter,
    selectC: req.body.selectC,
    isChecked: req.body.isChecked,
    id: req.body.id,
  });
  coffee.save();
  console.log(req.body.text);
});
