const express = require("express");
const router = express.Router();
const User = require("../model/userModel");
const { getUsers, getUser } = require("../controllers/user.controller");

router.get("/", getUsers);

router.get("/users", getUser);
