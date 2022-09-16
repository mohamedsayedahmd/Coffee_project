const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const app = express();

const User = require("./model/user");

app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.send("hello");
});

app.get("/html", (req, res) => {
  // res.sendFile(__dirname + "/views/index.html");
  res.render("index");
});

mongoose
  .connect(
    "mongodb+srv://mohamedssed:m24776593m@cluster0.i5ujxrr.mongodb.net/all-data?retryWrites=true&w=majority"
  )
  .then((result) => {
    app.listen(3000, (req, res) => {
      console.log("server is ruuning on 3000...");
    });
  })
  .catch((err) => {
    console.log(err);
  });

app.post("/insert", (req, res) => {
  // console.log(req.body.username);
  const user = new User({
    userName: req.body.username,
    userMail: req.body.usermail,
  });

  user.save((error, result) => {
    if (error) {
      console.log(error);
      return;
    }
    console.log(result);
  });
});

app.get("/insert", (req, res) => {
  User.find()
    .then((result) => {
      console.log(result);
    })
    .catch((err) => {
      console.log(err);
    });
});

//404
app.use((req, res) => {
  res.status(404).send("sorry can't find that!");
});
