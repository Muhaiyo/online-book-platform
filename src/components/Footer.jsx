import React from 'react';
import '../styles/Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="left-section">
                <p className="text">Nostrud exercitation ullamco laboris aliquip ex ea commodo consequat.</p>
                <div className="social-icons">
                    <a href="https://www.facebook.com" className="social-icon">
                        <FontAwesomeIcon icon={faFacebook} />
                    </a>
                    <a href="https://www.twitter.com" className="social-icon">
                        <FontAwesomeIcon icon={faTwitter} />
                    </a>
                    <a href="https://www.instagram.com" className="social-icon">
                        <FontAwesomeIcon icon={faInstagram} />
                    </a>
                    <a href="https://www.linkedin.com" className="social-icon">
                        <FontAwesomeIcon icon={faLinkedin} />
                    </a>
                </div>
            </div>
            <div className="middle-section">
                <h3 className="company-title">Company</h3>
                <ul className="company-links">
                    <li><a href="/">HOME</a></li>
                    <li><a href="/about-us">ABOUT US</a></li>
                    <li><a href="/products">BOOKS</a></li>
                    <li><a href="/products">NEW RELEASE</a></li>
                    <li><a href="/contact-us">CONTACT US</a></li>
                    <li><a href="/blog">BLOG</a></li>
                </ul>
            </div>
            <div className="right-section">
                <h3 className="important-links-title">IMPORTANT LINKS</h3>
                <ul className="important-links">
                    <li><a href="#">Privacy Policy</a></li>
                    <li><a href="#">FAQs</a></li>
                    <li><a href="#">Terms of Service</a></li>
                </ul>
            </div>
        </footer>
    );
};

export default Footer;

