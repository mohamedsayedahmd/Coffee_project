const express = require("express");
const router = express.Router();
const Coffee = require("./../Models/coffeeSchema");

// Get All Users
router.get("/", async (req, res) => {
  await Coffee.find()
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      console.log(err);
    });
});

// Get Singel Member
router.get("/:id", async (req, res) => {
  await Coffee.findById(req.params.id).then((result) => {
    res.send(result);
  });
});
// Delete Singel Member
router.delete("/:id", async (req, res) => {
  console.log("hello from DELETE req");
  console.log(req.params.id);
  const result = await Coffee.deleteOne({ id: req.params.id });
  console.log(result);
});

// router.get("/news", (req, res) => {
//   res.send("hello news");
// });

// router.post("/", (req, res) => {
//   res.send("create User");
// });

// router
//   .route("/:id")
//   .get((req, res) => {
//     console.log(req.user);
//     res.send("Get User With Id " + req.params.id);
//   })
//   .put((req, res) => {
//     res.send("Update User With Id " + req.params.id);
//   })
//   .delete((req, res) => {
//     res.send("Delete User With Id " + req.params.id);
//   });

// const users = [{ name: "Mohamed" }, { name: "Rami" }];
// router.param("id", (req, res, next, id) => {
//   //any time you have an id
//   req.user = users[id]; //get it from ourer users varible
//   console.log(id);
//   next(); //then continue the rest of our code
// });

module.exports = router;
