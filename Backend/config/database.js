const mongoose = require("mongoose");
mongoose
  .connect(
    "mongodb+srv://mohamedssed:m24776593m@cluster0.i5ujxrr.mongodb.net/all-data?retryWrites=true&w=majority"
  )
  .then((result) => {
    // console.log(result);
    console.log("entered");
    console.log("server is ruuning on 5000...");
  })
  .catch((err) => {
    console.log(err);
  });
