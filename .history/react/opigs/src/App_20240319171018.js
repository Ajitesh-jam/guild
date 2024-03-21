import './App.css';
import CustomNavbar from './components/Navbar';
import HomePage from './components/Homepage';
import LoginForm from './components/loginForm';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Placeholder from './components/PlaceHolders';
import AppDash from './components/Dashboard';
import FlipCard from './components/FlipBoard';
import Form1 from './components/SignUp';
function App() {
  return (
    <>
{
      <CustomNavbar style={{ width: '100%' }} />

      /*
      
      <div>
  
      </div>
         <div className="background-image">
      <LoginForm/>
      {{<Placeholder/>}}
    </div> */}

    {/* <AppDash/> */}
    <BrowserRouter>
      <Routes>
        <Route path='/'element={<HomePage />} />
        <Route path='/login' element={<LoginForm />} />
        <Route path='/Place' element={<Placeholder />} />
        <Route path='/Dashboard' element={<AppDash />} />
        <Route path='Companies' element={<FlipCard />} />
        <Route path='' element={<From1 />} />
      </Routes>
    </BrowserRouter>

    </>
  );
}
export default App;
