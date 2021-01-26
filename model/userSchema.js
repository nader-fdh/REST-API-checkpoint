const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const userSchema = new Schema({
  fname: { type: String, required: true },
  lname: String,
  email: { type: String, required: true },
  password: String,
});

const User = mongoose.model("User", userSchema);
module.exports = User;
