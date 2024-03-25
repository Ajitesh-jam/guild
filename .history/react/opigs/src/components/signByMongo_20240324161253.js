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

const express = require("express");
const mongoose = require("mongoose");
const app = express();
const http = require("http"); // Require http module for creating server
const User = require("./model/userModel");

const userRouter = require("./routes/user.route.js");
// Middleware for parsing JSON bodies
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
//route
app.use("/users", userRouter);

// MongoDB Connection
mongoose
  .connect(
    "mongodb+srv://Ajitesh:Ajitesh9877@cluster0.yz6u5fv.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
  )
  .then(() => {
    console.log("MongoDB Connected");
  })
  .catch((err) => {
    console.error("MongoDB Connection Error:", err);
  });

// Create HTTP server
const server = http.createServer(app);

// Start listening on port 3000
server.listen(3000, () => {
  console.log("Server listening on port 3000");
});
async function insert() {
  await User.create({
    Name: "Ajitesh2",
    Password: "Ajitesh999",
  });
  await User.create({
    Name: "Ajitesh3",
    Password: "Ajitesh999",
  });
}

export async function Authenticate(name, password) {}
// Define routes
// app.post("/signUp", async (req, res) => {
//   try {
//     const newUser = await User.create(req.body);
//     await newUser.save();
//     res.status(201).json(newUser);
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ message: "Server Error" });
//   }
// });

// app.get("/users", async (req, res) => {
//   try {
//     const users = await User.find();
//     res.json(users);

//     users.map((user) => {
//       if (user.Name === "Ajitesh2") console.log(user.Password);
//     });
//   } catch (err) {
//     console.error(err);
//     res.status(400).json({ message: "Server Error" });
//   }
// });
// app.get("/users/:id", async (req, res) => {
//   try {
//     const user = await User.findById(req.params.id);
//     if (!user) {
//       return res.status(404).json({ message: "User not found" });
//     }
//     res.send(user);

//     // const { id } = req.params;
//     // await User.findById(id);
//     // res.send(user);
//   } catch (err) {
//     console.log(err);
//     res.status(500).json({ message: err.message });
//   }
// });

// app.put("/users/:id", async (req, res) => {
//   try {
//     const user = await User.findByIdAndUpdate(req.params.id, req.body);
//     !user
//       ? res.status(404).json({ message: "User not found" })
//       : res.status(200).json(user);

//     const updatedUser = await User.findById(user.id);
//     res.send(updatedUser);
//   } catch (e) {
//     res.status(500).json({ message: e.message });
//   }
// });
// app.delete("/users/:id", async (req, res) => {
//   try {
//     const user = await User.findByIdAndDelete(req.params.id);
//     !user
//       ? res.status(404).json({ message: "User not found" })
//       : res.status(200).json(user);
//   } catch (e) {
//     res.status(500).json({ message: e.message });
//   }
// });
