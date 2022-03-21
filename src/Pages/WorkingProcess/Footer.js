import React from "react";
import "./style.css";
const Footer = () => {
  return (
    <>
      <hr />

      <div className="container">
        <div className="row">
          <div className="col-md-8 p-0">
            <p>
              © Copyright All Review <span className="yellow_color">Abu </span>
              Rayhan
            </p>
          </div>
          <div className="col-md-2 p-0 offset-2">
            <ul className="d-flex justify-content-around">
              <li className="me-3">
                <a href="#">Privacy</a>
              </li>
              <li>
                <a target="_blank" href="https://www.aburayhanraju.com/">
                  Contact us
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
