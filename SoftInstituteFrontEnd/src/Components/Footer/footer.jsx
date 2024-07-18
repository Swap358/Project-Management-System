import React from "react";
import "./footer.css";
export const Footer = () => {
  return (
    <>
      <div className="container d-flex-wrap px-5 justify-content-center bg-light">
        <div className="row d-flex">
          <div className="col-md-4">
            <h5 className="ft-head">Project Management System</h5>
            <p className="ft-p">
              A project management system is a powerful tool designed to help
              individual and tems efficiently organize. and track and accomplis
              their projects .
            </p>
          </div>
          <div className="col-md-4 ">
          <h5 className="ft-head">Quick Links</h5>
  <ul className="quick-links">
    <li><a href="/about">About Us</a></li>
    <li><a href="/services">Services</a></li>
    <li><a href="/contact">Contact</a></li>
    <li><a href="/faq">FAQ</a></li>
  </ul>
          </div>
          <div className="col-md-4">
          <h5 className="ft-head">Contact Us</h5>
  <p className="ft-p">
    <strong>Address:</strong> --------------<br />
    <strong>Email:</strong> info@projectmanagement.com<br />
    <strong>Phone:</strong> +1 234 567 890
  </p>
  <h5 className="ft-head">Newsletter</h5>
  <form className="newsletter-form">
    <input type="email" className="form-control" placeholder="Enter your email" />
    <button type="submit" className="btn btn-primary mt-2">Subscribe</button>
  </form>
          </div>
        </div>
      </div>
      <footer className="footer">
        <div className="footer-content">
          <p>&copy; 2024 Swapnil | All rights reserved.</p>
          <ul className="social-links">
            <li>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Facebook
              </a>
            </li>
            <li>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Twitter
              </a>
            </li>
            <li>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </>
  );
};
