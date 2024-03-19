import React from 'react';
import './FlipBoard.css'; // Import your CSS file
import img from './Images/kgp.png';
function FlipCard() {
  return (
    <div className="flip-container">
      <div className="flip-inner-container">
        <div className="flip-front">
          <img src="pic/front-img.jpg" alt="Front Image" />
        </div>
        <div className="flip-back">
          <div className="profile-image">
            <img src={img} alt="Profile Image" />
            <h2>Code Info</h2>
            <p>Web Developer | Content Creator | Youtuber</p>
            <ul>
              <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
              <li><a href="#"><i className="fab fa-instagram"></i></a></li>
              <li><a href="#"><i className="fab fa-youtube"></i></a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FlipCard;
