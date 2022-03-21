import React from "react";
import ScrollToTop from "react-scroll-to-top";

import { Link } from "react-router-dom";
import "./style.css";
const Footer = () => {
  return (
    <>
      <hr className="overflow-hidden" />
      <ScrollToTop smooth color="#001e92" top={300} />
      <div className="container mx-auto">
        <div className="row">
          <div className="col-md-8 md-p-0 col-12  p-md-0">
            <p>
              © Copyright All Review{" "}
              <a
                target="_blank"
                href="https://www.aburayhanraju.com/"
                className="yellow_color"
                rel="noreferrer"
              >
                Abu Rayhan
              </a>
            </p>
          </div>
          <div className="col-md-2 col-12   md-p-0 offset-md-2">
            <ul className="d-md-flex justify-content-around">
              <li className="me-md-3">
                <Link to="/about">Privacy</Link>
              </li>
              <li>
                <Link to="/contact">Contact us</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
