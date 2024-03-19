import './App.css';
import CustomNavbar from './components/Navbar';
import HomePage from './components/Homepage';
import LoginForm from './components/loginForm';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Placeholder from './components/PlaceHolders';
import AppDash from './components/Dashboard';
import FlipCard from './components/FlipBoard';
function App() {
  return (
    <>
{
      <CustomNavbar style={{width:100%}}/>
      /*
      
      <div>
  
      </div>
         <div className="background-image">
      <LoginForm/>
      {{<Placeholder/>}}
    </div> */}

    {/* <AppDash/> */}
    {/* <div><FlipCard></FlipCard></div> */}
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />}>
          {/* <Route index element={<Home />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>

    </>
  );
}
export default App;
