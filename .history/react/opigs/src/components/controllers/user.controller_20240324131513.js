const User = require("../model/userModel");

const getUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server Error" });
  }
};

const getUser = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.send(user);

    // const { id } = req.params;
    // await User.findById(id);
    // res.send(user);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: err.message });
  }
};

const signUp = async (req, res) => {
  try {
    const newUser = await User.create(req.body);
    await newUser.save();
    res.status(201).json(newUser);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server Error" });
  }
};

module.exports = {
  getUsers,
  getUser,
};
