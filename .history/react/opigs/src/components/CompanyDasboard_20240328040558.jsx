import React from 'react';
import './CompanyDashboard.css';
import { IoMdPerson } from "react-icons/io";

import { IoAnalyticsSharp ,IoSettingsOutline} from "react-icons/io5";
import { FaChalkboard,FaRegClipboard } from "react-icons/fa";
import { IoMdHelp } from "react-icons/io";
function JobCard({ icon, jobTitle, company, salary, posted }) {
  return (
    <>
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
    </>
  );
}

function Main() {
  return (


      <>

        <JobCard
          icon="fab fa-google-drive"
          jobTitle="Students Application"
       
        />

        <JobCard
          icon="fab fa-google"
          jobTitle="Add new Jobs for"

          
        />
        </>

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

