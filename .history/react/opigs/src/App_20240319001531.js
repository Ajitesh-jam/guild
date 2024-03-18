import './App.css';
import CustomNavbar from './components/Navbar';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Placeholder from './components/PlaceHolders';
function App() {
  return (
    <>

      <CustomNavbar />
      <div>
      <Placeholder/>
      </div>
         <div className="background-image">
      {/* Your application content goes here */}
    </div>

    </>
  );
}
export default App;
