import React from 'react';
import "./footer.css";


const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
      <div className="footer-section footer-social">
          <h3>Follow Us</h3>
          <ul>
            <li><a href="/social/facebook"><i className="fab fa-facebook-f"></i> Facebook</a></li>
            <li><a href="/social/twitter"><i className="fab fa-twitter"></i> X</a></li>
            <li ><a href="/social/twitter" style={{color:"#333"}}><i className="fab fa-twitter"></i>   jhbdf</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Support</h3>
          <ul>
            <li><a href="/support/help">Help</a></li>
            <li><a href="/support/advisories">Advisories</a></li>
            <li><a href="/support/status">Status</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Company</h3>
          <ul>
            <li><a href="/company/about">About</a></li>
            <li><a href="/company/blog">Blog</a></li>
            <li ><a href="/social/twitter" style={{color:"#333"}}><i className="fab fa-twitter"></i>   jhbdf</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Terms & Policies</h3>
          <ul>
            <li><a href="/policies/terms-of-use">Terms of Use</a></li>
            <li><a href="/policies/code-of-conduct">Code of Conduct</a></li>
            <li><a href="/policies/privacy">Privacy</a></li>
          </ul>
        </div>
        
      </div>
    </footer>
  );
};

export default Footer;