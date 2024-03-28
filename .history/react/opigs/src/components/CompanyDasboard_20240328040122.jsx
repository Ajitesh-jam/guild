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
    <section className="main">
      <div className="main-top">
        <p>Explore the universe!</p>
      </div>
      <div className="main-body">
        <h1>Recent Jobs</h1>

        <div className="search_bar">
          <input type="search" placeholder="Search job here..." />
          <select name="">
            <option>Category</option>
            <option>Web Design</option>
            <option>App Design</option>
            <option>App Development</option>
          </select>
          <select className="filter">
            <option>Filter</option>
          </select>
        </div>

        <div className="tags_bar">
          <div className="tag">
            <i className="fas fa-times"></i>
            <span>Programming</span>
          </div>
          <div className="tag">
            <i className="fas fa-times"></i>
            <span>Design</span>
          </div>
          <div className="tag">
            <i className="fas fa-times"></i>
            <span>PHP</span>
          </div>
          <div className="tag">
            <i className="fas fa-times"></i>
            <span>JavaScript</span>
          </div>
        </div>

        <div className="row">
          <p>There are more than <span>400</span> Jobs</p>
          <a href="#">See all</a>
        </div>

        <JobCard
          icon="fab fa-google-drive"
          jobTitle="UX Designer"
          company="Google Drive"
          salary="$6.7 - $12.5k /yr"
          posted="1 days ago"
        />

        <JobCard
          icon="fab fa-google"
          jobTitle="JavaScript Developer"
          company="Google"
          salary="$8.7 - $13.2k /yr"
          posted="2 days ago"
        />

        <JobCard
          icon="fab fa-facebook"
          jobTitle="Product Developer"
          company="Facebook"
          salary="$11 - $18.5k /yr"
          posted="2 days ago"
        />

        <JobCard
          icon="fab fa-git-alt"
          jobTitle="Programmer"
          company="Github"
          salary="$6 - $11.5k /yr"
          posted="3 days ago"
        />

        <JobCard
          icon="fab fa-youtube"
          jobTitle="React.js Expert"
          company="Youtube"
          salary="$12.5 - $25.5k /yr"
          posted="4 days ago"
        />
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
            <h1>jobs</h1>
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

