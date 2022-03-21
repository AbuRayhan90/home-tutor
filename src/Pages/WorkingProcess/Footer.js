import React from "react";
import { Link } from "react-router-dom";
import "./style.css";
const Footer = () => {
  return (
    <>
      <hr />

      <div className="container">
        <div className="row">
          <div className="col-md-8 p-0">
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
          <div className="col-md-2 p-0 offset-2">
            <ul className="d-flex justify-content-around">
              <li className="me-3">
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
