import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="page-footer font-small pt-4 bg-info">
      <div className="container text-light text-center text-md-left">
        <div className="row">
          <div className="col-md-6 mt-md-0 mt-3">
            <h5 className="text-uppercase">Footer Content</h5>
            <p>
              Here you can use rows and columns to organize your footer content.
            </p>
          </div>
          <hr className="clearfix w-100 d-md-none pb-3" />
          <div className="col-md-6 mb-md-0 mb-3">
            <h5 className="text-uppercase">Links</h5>
            <ul className="list-unstyled">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About Us</Link>
              </li>
              <li>
                <Link to="/contact">Contact Us</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-copyright text-center border-top py-3">
        © 2020 Copyright
      </div>
    </footer>
  );
};

export default Footer;
