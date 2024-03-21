const mongoose = require("mongoose");

//connection 
mongoose.connect("mongodb://localhost:3000/opigs", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
}).then((= > {
    console.log("Connection Successful");
})).catch(err =>{console.log(err)})
;
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
