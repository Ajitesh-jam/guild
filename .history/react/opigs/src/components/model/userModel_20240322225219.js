const mongoose = require("mongoose");

//schema
const userSchema = new mongoose.Schema({
  Name: {
    type: String,
    required: true,
  },
  Password: {
    type: String,
    required: true,
  },
});
module.exports = mongoose.model("User", userSchema);
