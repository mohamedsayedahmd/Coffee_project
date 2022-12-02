const User = require("../Models/userSchema");

const Register = (req, res) => {
  console.log(req.body);
  const newUser = new User({
    email: req.body.email,
    password: req.body.password,
  });
  newUser.save();
  res.send("done");
};
module.exports = { Register };

// (err) => {
//     if (err) {
//       console.log(err);
//       res.send(err);
//     } else {
//       res.send("register");
//     }
//   }
