const express = require("express");
const router = express.Router();
const User = require("../model/userSchema");

// get all users
router.get("/allUser", (req, res) => {
  User.find()
    .then((data) => res.send(data))
    .catch((err) => res.status(400).send(err));
});
// POST a new user
router.post("/addUser", (req, res) => {
  let newUser = new User(req.body);
  newUser.save((err, msg) => {
    if (err) throw err;
    else res.json({ msg: "new user added" });
  });
});
// Edit user by id
router.put("/editUser/:id", (req, res) => {
  User.findByIdAndUpdate({ _id: req.params.id }, req.body)
    .then((data) => res.send(data))
    .catch((err) => res.status(400).send(err));
});
// Remove user by id
router.delete("/delete/:id", (req, res) => {
  User.findByIdAndDelete(req.params.id)
    .then((msg) => res.json({ msg: "user deleted" }))
    .catch((err) => res.status(400).send(err));
});
module.exports = router;
