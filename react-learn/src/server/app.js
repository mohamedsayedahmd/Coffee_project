    const express = require("express");
    // const mongoose = require("mongoose");
    const bodyParser = require("body-parser");

    const app = express();
    //NEW

    const mongoose = require("mongoose");
    mongoose
    .connect(
        "mongodb+srv://mohamedssed:m24776593m@cluster0.i5ujxrr.mongodb.net/all-data?retryWrites=true&w=majority"
    )
    .then((result) => {
        // console.log();
        app.listen(3009, (req, res) => {
        //   console.log(result);
        console.log(result);
        console.log("server is ruuning on 3009...");
        });
    })
    .catch((err) => {
        console.log(err);
    });

    const UserSchema = new mongoose.Schema({
    count: String,
    clintName: String,
    });

    const User = mongoose.model("UserDatabase", UserSchema);

    const user = new User({
    count: "203",
    clintName: "M7md",
    });

    // user.save(); // add to database

    const PeopleSchema = new mongoose.Schema({
    name: String,
    age: {
        type: Number,
        min: 1,
        max: 1000,
    },
    });
    const Person = mongoose.model("Person", PeopleSchema); // Person collection

    const person = new Person({
    name: "Amer",
    age: 19,
    });

    // person.save();

    const user1 = new User({
    count: "101",
    clintName: "Bashar",
    });
    const user2 = new User({
    count: "50",
    clintName: "Gmal",
    });
    const user3 = new User({
    count: "94",
    clintName: "Majd",
    });
    //Find()

    User.find((err, res) => {
    if (err) {
        console.log(err);
    } else {
        res.forEach((element) => {
        console.log(element.clintName);
        });
    }
    });

    User.updateOne(
    { _id: "63206f0b8af9e2f46b52eb15" },
    { clintName: "Jamal" },
    (err) => {
        if (err) {
        console.log(err);
        } else {
        console.log("Sucesfully updated the document.");
        }
    }
    );
    User.deleteOne({ clintName: "Majd" }, function (err) {
    if (err) {
        return handleError(err);
    } else {
        console.log("Succesfully deleted the document.");
    }
    });
    User.deleteMany({ clintName: "M7md" }, (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log("Succesfully deleted many document.");
    }
    });

    //↓ = > mongoose.model("UserDatabase", UserSchema);
    // User.insertMany([user1, user2, user3], (err) => {if(err){console.log(err);}else{console.log("Succesfully saved all the fruits to User db")}});

    // User.find((err, users) => {
    //   //users is a name to log the users
    //   if (err) {
    //     console.log(err);
    //   } else {
    //     console.log(users);
    //   }
    // });
    //

    //END NEW

    // app.use(bodyParser.urlencoded({ extended: true }));
    // app.use(express.static("public"));

    // app.get("/", (req, res) => {
    //   //   res.send("hello");
    //   //   res.sendFile(__dirname + "/index.html");
    //   res.send("Enter");
    //   User.find()
    //     .then((result) => {
    //       console.log(result);
    //     })
    //     .catch((err) => {
    //       console.log(err);
    //     });
    // });

    // mongoose
    //   .connect(
    //     "mongodb+srv://mohamedssed:m24776593m@cluster0.i5ujxrr.mongodb.net/all-data?retryWrites=true&w=majority"
    //   )
    //   .then((result) => {
    //     // console.log();
    //     app.listen(3009, (req, res) => {
    //       //   console.log(result);
    //       console.log("server is ruuning on 3009...");
    //     });
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });

    // app.post("/", (req, res) => {
    //   console.log("ooow you in google");
    //   console.log(req.body);
    //   const user = new User({
    //     count: req.body.count,
    //     clintName: req.body.clintName,
    //   });

    //   user.save((error, result) => {
    //     if (error) {
    //       console.log(error);
    //       return;
    //     }
    //     console.log(result);
    //   });
    // });

    // app.get("/insert", (req, res) => {
    //   User.find()
    //     .then((result) => {
    //       console.log(result);
    //     })
    //     .catch((err) => {
    //       console.log(err);
    //     });
    // });
