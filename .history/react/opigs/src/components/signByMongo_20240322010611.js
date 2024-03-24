const mongoose = require("mongoose");
const http = require("http");
const fs = require("fs");

// Connection to MongoDB
mongoose
  .connect("mongodb://localhost:27017", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("MongoDB Connected");
  })
  .catch((err) => {
    console.error("MongoDB Connection Error:", err);
  });

// Define Schema
const userSchema = new mongoose.Schema({
  Name: {
    type: String,
    required: true,
  },
  Email: {
    type: String,
    required: true,
    unique: true,
  },
  Password: {
    type: String,
    required: true,
  },
  PhoneNumber: String,
  JobTitle: String,
  gender: String,
});

const User = mongoose.model("User", userSchema);

// Create HTTP Server
const server = http.createServer((req, res) => {
  if (req.url === "/favicon.ico") {
    res.end();
    return;
  }

  let log = `${new Date().toISOString()}: New Request for ${req.url}\n`;
  fs.appendFile("log.txt", log, function (err) {
    if (err) {
      console.error("Error appending to log file:", err);
    }
  });

  switch (req.url) {
    case "/":
      res.writeHead(200, { "Content-Type": "text/plain" });
      res.end("Home Page");
      break;
    case "/about":
      res.writeHead(200, { "Content-Type": "text/plain" });
      res.end("About Page");
      break;
    default:
      res.writeHead(404, { "Content-Type": "text/plain" });
      res.end("404 Not Found");
  }
});

const PORT = 81;
server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
