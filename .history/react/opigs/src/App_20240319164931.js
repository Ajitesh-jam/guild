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
    <Router>
      <div>
        <Route path="/login" component={LoginForm} />
        <Route path="/place" component={Placeholder} />
        <Route path="/dashboard" component={AppDash} />
        {/* This Route will match if no other route matches */}
        <Route component={FlipCard} />
      </div>
    </Router>

    </>
  );
}
export default App;
