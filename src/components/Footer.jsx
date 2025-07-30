import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
        <div className="top-footer">

            <div className="footer-phara">
                <h1>I'm Available for Freelance Projects</h1>
                <br />
                <p>Feel free to initiate a project and let's explore how we can collaborate.</p>
            </div>

            <div className="footer-social-media">
                <h2>Quick Contact</h2>
                <ul>
                    <li><a href="#home">E-mail</a></li>
                    <li><a href="#features">WhatsApp</a></li>
                    <li><a href="#contact">Telegram</a></li>
                </ul>
            </div>
        </div>

        <div className="middle-footer">
            <a href="#">Home</a>
            <a href="#">About Me</a>
            <a href="#">Skills</a>
            <a href="#">Projects</a>
            <a href="#">Contact</a>
        </div>

        <div className="footer-bottom">
            © {new Date().getFullYear()} RaccoonLabs. All rights reserved.
        </div>

    </footer>
  );
};

export default Footer;
