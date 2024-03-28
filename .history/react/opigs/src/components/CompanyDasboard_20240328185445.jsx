import React from 'react';
import './CompanyDashboard.css';
import { IoMdPerson } from "react-icons/io";
import { useParams } from 'react-router-dom';
import { IoAnalyticsSharp ,IoSettingsOutline} from "react-icons/io5";
import { FaChalkboard,FaRegClipboard } from "react-icons/fa";
import { IoMdHelp } from "react-icons/io";
import axios from 'axios';

function JobCard({ icon, jobTitle, company, salary, posted }) {
    return (
      <div className="job_card">
        <div className="job_details">
          <div className="img">
            <i className={icon}></i>
          </div>
          <div className="text">
            <h2>{jobTitle}</h2>
            <span>{company} - Junior Post</span>
          </div>
        </div>
        <div className="job_salary">
          <h4>{salary}</h4>
          <span>{posted}</span>
        </div>
      </div>
    );
  }
  
  async function getStudent(id) {
    try {
      const link = `http://localhost:5000/users/${id}`;
      let res = await axios.get(link);
      console.log("res", res);
      if (!res.data) return null;
      else {
        return res.data; // Return the data
      }
    } catch (err) {
      console.error(err);
      return null;
    }
  }
  
  async function getCompany(id) {
    try {
      const link = `http://localhost:5000/company/${id}`;
      let res = await axios.get(link);
      console.log("res", res);
      if (!res.data) return null;
      else {
        const company = res.data;
        console.log(company);
        // Use Promise.all to handle multiple asynchronous calls and wait for all of them to complete
        await Promise.all(company.StudentsApplied.map(async (studentId) => {
          const student = await getStudent(studentId);
          console.log(student);
        }));
      }
    } catch (err) {
      console.error(err);
    }
  }
  
  function Main() {
    const { id } = useParams();
    console.log(id);
  
    useEffect(() => {
      // Call getCompany inside useEffect to ensure it runs after the component is mounted
      getCompany(id);
    }, [id]); // Add id as a dependency to useEffect to re-run the effect when id changes
  
    return (
      <section className="main">
        <div className="main-body">
          <h1>Recent Jobs Applications</h1>
  
          {/* Add JobCard components here */}
          {/* You can map over a list of jobs and render JobCard components dynamically */}
        </div>
      </section>
    );
  }

function CompanyDashboard() {
  return (
    <div className="container">
      <nav>
        <div className="navbar">
          <div className="logo">
            <img src="/pic/logo.jpg" alt="" />
            <h1>Company</h1>
          </div>
          <ul>
            <li>
              <a href="#">
                <i className="fas fa-user"></i>
               

                <span className="nav-item"> <IoMdPerson className='icon'/>Dashboard</span>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fas fa-chart-bar"></i>
                <span className="nav-item"><IoAnalyticsSharp className='icon'/>Analytics</span>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fas fa-tasks"></i>
                <span className="nav-item"><FaChalkboard className='icon'/>Jobs Board</span>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fab fa-dochub"></i>
                <span className="nav-item"><FaRegClipboard className='icon'/>Documents</span>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fas fa-cog"></i>
                <span className="nav-item"><IoSettingsOutline className='icon'/>Setting</span>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fas fa-question-circle"></i>
                <span className="nav-item"><IoMdHelp className='icon'/>Help</span>
              </a>
            </li>
            <li>
              <a href="#" className="logout">
                <i className="fas fa-sign-out-alt"></i>
                <span className="nav-item">Logout</span>
              </a>
            </li>
          </ul>
        </div>
      </nav>
      <Main />
    </div>
  );
}

export default CompanyDashboard;

