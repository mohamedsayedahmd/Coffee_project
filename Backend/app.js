const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(
  cors({
    allowedOrigins: ["http://localhost:3000"],
  })
);
const mongoose = require("mongoose");
mongoose
  .connect(
    "mongodb+srv://mohamedssed:m24776593m@cluster0.i5ujxrr.mongodb.net/all-data?retryWrites=true&w=majority"
  )
  .then((result) => {
    console.log("entered");
    app.listen(process.env.PORT || 5000, (req, res) => {
      console.log("server is ruuning on 5000...");
    });
  })
  .catch((err) => {
    console.log(err);
  });

const CoffeeSchema = new mongoose.Schema({
  text: String,
  counter: Number,
  selectC: String,
  isChecked: Boolean,
  id: String,
});
const Coffee = mongoose.model("CoffeeDatabase", CoffeeSchema);

app.get("/", (req, res) => {
  res.send("hello world");
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
