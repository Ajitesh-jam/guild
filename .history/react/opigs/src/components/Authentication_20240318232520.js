import Form1 from './components/form';

function App() {
    return (
  
      <>
      <CustomNavbar/>
      <Form1/>
  
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
    );}