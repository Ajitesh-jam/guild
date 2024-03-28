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
async function getStudent(id){
    console.log(id);
    try{
        const link=`http://localhost:5000/users/${id}`;
        let res=await axios.get(link);
        console.log("res",res);
        if(!res.data)return null;
        else {
            const company= getCompany(id);
            console.log();

        };
    }
    catch(err){
        console.error(err);
    }
}
async function getCompany(id){
    console.log(id);
    try{
        const link=`http://localhost:5000/company/${id}`;
        let res=await axios.get(link);
        console.log("res",res);
        if(!res.data)return null;
        else {
            const company=res.data;
            console.log(company);
            console.log("stduent");
            console.log(company.StudentsApplied[1]);
            company.StudentsApplied.map(async (studentId)=>{
                const student =await getStudent(studentId);
                console.log(student);
            });

        };
    }
    catch(err){
        console.error(err);
    
    }
}


function Main() {
    const { id } = useParams();
    console.log(id);
    getCompany(id);
    


    // company.StudentsApplied.map(async (studentId)=>{
    //     const student =getStudent(studentId);

    // });


  return (
    <section className="main">
     
      <div className="main-body">
        <h1>Recent Jobs Applications</h1>



      

        <JobCard
          icon="fab fa-google-drive"
          jobTitle="Students Application"
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

