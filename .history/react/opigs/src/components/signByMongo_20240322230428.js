// const express = require("express");
// const mongoose = require("mongoose");
// const app = express();

// // Connection to MongoDB
// mongoose
//   .connect("mongodb://localhost:27017/opigs", {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   })
//   .then(() => {
//     console.log("MongoDB Connected");
//   })
//   .catch((err) => {
//     console.error("MongoDB Connection Error:", err);
//   });

// // Define Schema
// const userSchema = new mongoose.Schema({
//   Name: {
//     type: String,
//     required: true,
//   },
//   Email: {
//     type: String,
//     required: true,
//     unique: true,
//   },
//   Password: {
//     type: String,
//     required: true,
//   },
//   PhoneNumber: String,
//   JobTitle: String,
//   gender: String,
// });

// const User = mongoose.model("User", userSchema);

// // Middleware for parsing JSON bodies
// app.use(express.json());

// // API routes
// app.get("/api/users", async (req, res) => {
//   try {
//     const users = await User.find();
//     res.json(users);
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ message: "Server Error" });
//   }
// });

// app.post("/api/users", async (req, res) => {
//   try {
//     const newUser = new User(req.body);
//     await newUser.save();
//     res.status(201).json(newUser);
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ message: "Server Error" });
//   }
// });

// const port = 81;
// app.listen(port, () => {
//   console.log(`Server running on port ${port}`);
// });

const app = require("express")();
const mongoose = require("mongoose");
const http = require("http").Server(app);

const User = require("./model/userModel");

async function insert() {
  await User.create({
    name: "Ajitesh",
    Password: "Ajitesh999",
  });
}
mongoose.connect(
  "mongodb+srv://Ajitesh:Ajitesh9877@cluster0.yz6u5fv.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
);
http.listen(3000, function () {
  console.log("listening on port 3000");
});
insert();
