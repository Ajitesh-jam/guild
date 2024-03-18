
import './App.css';
import CustomNavbar from './components/Navbar';
import Authentication from './components/Authentication';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (

    <>
    <CustomNavbar/>
    <Router>
      <Switch>
        <Route path="/login" component={Authentication} />
        {/* <Route path="/dashboard" component={Dashboard} />
        <Route path="/resume-upload" component={ResumeUpload} />
        <Route path="/feedback" component={Feedback} />
        <Route path="/company-details" component={CompanyDetails} />
        <Route path="/notification" component={Notification} />
        <Route path="/recruiter-verification" component={RecruiterVerification} />
        <Route path="/admin-panel" component={AdminPanel} /> */}
      </Switch>
    </Router>


    </>
  );
}

export default App;
