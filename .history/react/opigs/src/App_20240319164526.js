import './App.css';
import CustomNavbar from './components/Navbar';
import HomePage from './components/Homepage';
import LoginForm from './components/loginForm';
import { BrowserRouter, Routes, Route ,Switch, Router} from "react-router-dom";
import Placeholder from './components/PlaceHolders';
import AppDash from './components/Dashboard';
import FlipCard from './components/FlipBoard';
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
        <Route path="/" element={<HomePage />} />
        <Switch>
          <Route path="/login" element={<LoginForm />} />
          <Route path="/Place" element={<Placeholder />} />
          <Route path="/Dashboard" element={<AppDash />} />
          <Route path="*" element={<FlipCard />} />
        </Switch>
      </Routes>
    </BrowserRouter>


    </>
  );
}
export default App;
