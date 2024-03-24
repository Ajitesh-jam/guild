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
app.use(express.urlencoded({ extended: false }));

app.get("/api/users", (req, res) => {
  const html = `
    <h1>User</h1>
    <ul>
    ${users
      .map((user) => `<li>${user.first_name} ---- ${user.id}</li>`)
      .join("")}
    </ul>
    
    `;
  res.send(html);
});

app.post("/api/users/post", (req, res) => {
  // post new user
  const body = req.body;
  users.push({ ...body, id: users.length });
  fs.writeFile("./MOCK_DATA.json", JSON.stringify(users), (err) => {
    if (err) {
      return res.status(500).json({ error: "Error writing to file" });
    }
    return res.json({ status: "post completed" });
  });
});
app.get("/api/users/:id", (req, res) => {
  const id = Number(req.params.id);
  const user = users.find((user) => user && user.id === id);
  if (!user) {
    return res.status(404).send("User not found");
  }
  const html = `User ID: ${user.id}<br>Name: ${user.first_name} ${user.last_name}<br>Email: ${user.email}`;
  res.send(html);
});

app.patch("api/users/:id", (req, res) => {
  //post new user
  return res.json({ status: "patching pending " });
});
app.delete("api/users/del", (req, res) => {
  //post new user
  return res.json({ status: "delete pending " });
});
app.listen(port, () => {
  console.log(`listening on port :${port}`);
});
