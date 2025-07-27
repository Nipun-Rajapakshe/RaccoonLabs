import React from "react";
import './Navbar.css';
import ProfileP from './images/NipunRajapakshe-01.png';

const Header = () => {
  return (
    <header className="header">
      <div className="header-container">
        <h2 className="header-greeting">Hello! I'm Nipun Rajapakshe</h2>
        <h1 className="header-title">Where Code Meets Creativity for a Cinematic Web Journey</h1>
        <p className="header-subtitle">Leveraging modern web technologies including ReactJS, Responsive design and intuitive interfaces
            to bring your digital vision to life. Let's create something extraordinary together!</p>
        <button className="about-me">About Me</button>
      </div>
                       

      <div className="dp01">
        <img src={ProfileP} alt="Nipun Rajapakshe" className="profile-picture" />
      </div>
    </header>
  );
}

export default Header;