import "./App.css";
import CustomNavbar from "./components/Navbar";
import HomePage from "./components/Homepage";
import LoginForm from "./components/loginForm";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Placeholder from "./components/PlaceHolders";
import AppDash from "./components/Dashboard";
import FlipCard from "./components/FlipBoard";
import Form1 from "./components/SignUp";
import CompanyList from "./components/CompanyList";

const express = require("express");
const mongoose = require("mongoose");
const app = express();
const User = require("./components/model/userModel");

// Middleware for parsing JSON bodies
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
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

app.post("/UserSignUp", async (req, res) => {
  const [Name, Password] = req.body;
  try {
    const newUser = await User.create({ Name, Password });
    await newUser.save();
    res.status(201).json(newUser);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server Error" });
  }
});
function App() {
  return (
    <>
      {
        <CustomNavbar style={{ width: "100%" }} />

        /*
      
      <div>
  
      </div>
         <div className="background-image">
      <LoginForm/>
      {{<Placeholder/>}}
    </div> */
      }

      {/* <AppDash/> */}
      <BrowserRouter>
        <Routes>
          <Route path="/Home" element={<HomePage />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/Place" element={<Placeholder />} />
          <Route path="/Dashboard" element={<AppDash />} />
          <Route path="/Companies" element={<CompanyList />} />
          <Route path="/signUp" element={<Form1 />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;
