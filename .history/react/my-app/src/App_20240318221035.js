
// import './App.css';
// import Navbar from './Navbar'; //Importing the navbar component



// function App() {
//   return (
//       <Navbar/>
//   );
// }


// export default App;


import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Mainpage from '../../react/my-app/src/MainPage'
//import SellPage from './SellPage'
//import BuyPage from './BuyPage'
//import "bootstrap/dist/css/bootstrap.min.css";
//import 'jquery/dist/jquery.min.js'
//import 'bootstrap/dist/js/bootstrap.min.js'
//import EmailPage from './EmailPage';
//import AboutUs from './AboutUs';

function App() {
  return (
    <>
      {/* <Router>
        <Routes>
          <Route path='/' element={<Mainpage />} />
          <Route path='/sell' element={<SellPage />} />
          <Route path='/buy' element={<BuyPage />} />
          <Route path='/email' element={<EmailPage />} />
          <Route path='/about' element={<AboutUs />} />
        </Routes>
      </Router> */}
      <Mainpage/>
    </>
  );
}
export default App;
