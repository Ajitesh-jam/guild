const User = require("../model/userModel");

app.use(express.urlencoded({ extended: false }));
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

const updateUser = async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(req.params.id, req.body);
    !user
      ? res.status(404).json({ message: "User not found" })
      : res.status(200).json(user);

    const updatedUser = await User.findById(user.id);
    res.send(updatedUser);
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
};

const deleteUser = async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);
    !user
      ? res.status(404).json({ message: "User not found" })
      : res.status(200).json(user);
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
};

module.exports = {
  getUsers,
  getUser,
  signUp,
  updateUser,
  deleteUser,
};
