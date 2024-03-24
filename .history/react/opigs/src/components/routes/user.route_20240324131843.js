const express = require("express");
const router = express.Router();
const User = require("../model/userModel");
const {
  getUsers,
  getUser,
  signUp,
  updateUser,
  deleteUser,
} = require("../controllers/user.controller");

router.get("/users", getUsers);

router.get("/users/:id", getUser);

router.post("./signUp", signUp);

router.put("./users/:id", updateUser);

router.delete("./users/:id", deleteUser);

module.exports = router;
