const express = require("express");
const router = express.Router();
const User = require("../model/userModel");
const { getUsers, getUser, signUp } = require("../controllers/user.controller");

router.get("/users", getUsers);

router.get("/users/:id", getUser);

router.post("./signUp", signUp);

module.exports = router;
