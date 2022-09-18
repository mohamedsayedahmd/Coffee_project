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
app.get("/save", (req, res) => {
  const data1 = {
    text: "mohamed",
    counter: 5,
    selectC: "Ice Coffee",
    isChecked: false,
    id: 212,
  };
  res.json(data1);
});
app.get("/s", (req, res) => {
  Coffee.find()
    .then((result) => {
      //   console.log(result);
      res.send(result);
    })
    .catch((err) => {
      console.log(err);
    });
});

// app.delete("",(req,res)=>{
//     Coffee.findByIdAndDelete(req.params.id)
// })

app.get("/s/:id", (req, res) => {
  Coffee.findById(req.params.id).then((result) => {
    res.send(result);
  });
});

app.delete("/s/:id", async (req, res) => {
  console.log("hello from DELETE req");
  // const result = await Coffee.deleteOne({ _id: req.params.id });
  // console.log(result);
});

// app.delete("/s/:id", (req, res) => {
//   Coffee.findById(req.params.id).then((result) => {
//     res.send(result);
//   });
// });

// app.delete("/s/:id", async (req, res) => {
//   console.log("hello from DELETE req");
//   console.log(req.params.id);
//   const result = await Coffee.deleteOne({ _id: req.params.id });
//   // console.log(result);
// });

// const url = "http://127.0.0.1:5000/s";
// http.get(url, (response) => {
//   console.log(res.response);

//   response.on("data", (data) => {
//     // console.log(data);
//     const coffeeData = JSON.parse(data); //HEX
//     console.log(coffeeData);
//     // const object = {
//     //     name: "mohamed",
//     //     food: "coffee"
//     // }
//     // console.log(JSON.stringify(object));

//     // const temp = weatherData.main.temp
//     // console.log(temp)
//     // const dis = weatherData.weather[0].description;
//     // // console.log(dis)
//     // const icon = weatherData.weather[0].icon;
//     // var uu = "http://openweathermap.org/img/wn/" + icon + "@2x.png"
//     // res.write("<p>The weather is currently " + dis + "</p>")
//     // res.write("<h1>The temperature in London is " + temp + " degress Celcius.</h1>")
//     // res.write("<img src=" + uu + ">")
//     // res.send()
//   });
// });
