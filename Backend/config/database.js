const mongoose = require("mongoose");
mongoose
  .connect(
    "mongodb+srv://mohamedssed:m24776593m@cluster0.i5ujxrr.mongodb.net/all-data?retryWrites=true&w=majority"
  )
  .then((result) => {
    console.log("Connected To Database...");
  })
  .catch((err) => {
    console.log(err);
  });
