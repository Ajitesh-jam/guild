import './App.css';
import CustomNavbar from './components/Navbar';
import Authentication from './components/Authentication';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <>
      <CustomNavbar />
      <Router>
        <Switch>
          <Route path="/login" component={Authentication} />
          {/* Add other routes here */}
        </Switch>
      </Router>
    </>
  );
}

export default App;
