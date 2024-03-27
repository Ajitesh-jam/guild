const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
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
  Email: {
    type: String,
    required: true,
    unique: true,
  },
  Roll: {
    type: String,
    required: true,
  },
});

userSchema.methods.comparePassword = async function (enteredPassword) {
  try {
    return await bcrypt.compare(enteredPassword, this.Password);
  } catch (error) {
    throw new Error(error);
  }
};
module.exports = mongoose.model("User", userSchema);
