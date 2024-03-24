const mongoose = require("mongoose");

//connection
mongoose
  .connect("mongodb://localhost:81/opigs", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connection Successful");
  })
  .catch((err) => {
    console.log(err);
  });

const db = mongoose.connection;

//Schema
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
  PhoneNumber: {
    type: String,
  },
  JobTitle: {
    type: String,
  },
  gender: {
    type: String,
  },
});

const User = mongoose.model("user", userSchema);

const myServe = http.createServer((req, res) => {
  if (req.url === "/favicon.ico") {
    res.end();
  }

  log = `${Date.now()}: and ${req.url} New Request rec.\n`;
  fs.appendFile("log.txt", log, function (err) {
    if (err) throw err;
    switch (req.url) {
      case "/":
        console.log(res.end("HomePage"));
        break;
      case "/about":
        res.end("AboutPage");
        break;
      default:
        res.end("not found 404");
    }
  });
  //console.log(req);
  console.log("New req rec.");
});
myServe.listen(81, () => console.log("server is running at port 81"));
