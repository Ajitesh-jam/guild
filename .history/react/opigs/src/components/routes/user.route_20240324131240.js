const express = require("express");
const router = express.Router();
const User = require("../model/userModel");
const { getUsers, getUser } = require("../controllers/user.controller");

router.get("/users", getUsers);

router.get("/users/:id", getUser);

module.exports = router;
