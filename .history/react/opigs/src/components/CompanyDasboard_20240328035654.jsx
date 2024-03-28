import React from 'react';
import './CompanyDashboard.css'; // Import the CSS file for styling

function CompanyDashboard() {
    return (
        <div className="dashboard">
            <h1>Welcome to Company Dashboard</h1>
            <div className="options">
                <div className="option">
                    <h2>Students Applied</h2>
                    <p>View and manage students who have applied to your jobs.</p>
                </div>
                <div className="option">
                    <h2>Open Jobs</h2>
                    <p>View and manage your open job listings.</p>
                </div>
                <div className="option">
                    <h2>Profile</h2>
                    <p>View and manage your company profile.</p>
                </div>
                {/* Add more options as needed */}
            </div>
        </div>
    );
}

export default CompanyDashboard;
