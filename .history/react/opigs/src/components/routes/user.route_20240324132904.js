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
app.use(express.urlencoded({ extended: false }));
router.get("/", getUsers);

router.get("/:id", getUser);

router.post("/signUp", signUp);

router.put("/:id", updateUser);

router.delete("/:id", deleteUser);

module.exports = router;
