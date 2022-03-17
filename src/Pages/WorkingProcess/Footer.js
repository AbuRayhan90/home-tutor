import React from 'react';
import './style.css';
const Footer = () => {
  return (
    <>
      <hr />

      <div class="container">
        <div className="row">
          <div className="col-md-8 p-0">
            <p>
              © Copyright All Review <span className="yellow_color">Edu</span>
              Skills
            </p>
          </div>
          <div className="col-md-2 p-0 offset-2">
            <ul className="d-flex justify-content-around">
              <li className="me-3">
                <a href="">Privacy</a>
              </li>
              <li>
                <a href="">Contact us</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
