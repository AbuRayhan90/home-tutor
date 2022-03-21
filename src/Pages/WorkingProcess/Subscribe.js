import React from "react";
import { Link } from "react-router-dom";
import ButtonBlue from "../../components/Button/ButtonBlue";
import Heading from "../../components/Heading/Heading";
import "./style.css";

const Subscribe = () => {
  return (
    <div className="container pt-5">
      <div className="row d-flex align-items-center subcribe_bg px-4 py-5">
        <div className="col-md-4 ">
          <Heading heading1="Newsletter" />
          <p className="mt-3">
            My he houses or months settle remove ladies appear. Engrossed
            suffering he recommend.
          </p>
        </div>
        <div className="col-md-6 offset-2">
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="yourmail@gmail.com"
              aria-label="Recipient's username"
              aria-describedby="basic-addon2"
              required="required"
            />

            <ButtonBlue text="Subscribe Us" radius="rounded-0" />
          </div>
        </div>
      </div>
      <div className="row d-flex justify-content-between mt-4 ">
        <div className="col-md-10 p-0">
          <ul className="d-flex subscribe_menu">
            <li className="nav-item">
              <Link className="nav-link " aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link " to="/about">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/courses">
                Courses
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/blog">
                Blog
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/contact">
                Contact Us
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/signin">
                Signin
              </Link>
            </li>
          </ul>
        </div>
        <div className="col-md-2 p-0">
          <ul className="d-flex  justify-content-around social_icons">
            <a
              target="_blank"
              href="https://www.facebook.com/"
              rel="noreferrer"
            >
              <i className="fab fa-facebook-f "></i>
            </a>
            <a
              target="_blank"
              href="https://www.instagram.com/"
              rel="noreferrer"
              className="border-start ps-2"
            >
              <i className="fab fa-instagram"></i>
            </a>
            <a
              target="_blank"
              href="https://twitter.com/?lang=en"
              rel="noreferrer"
              className="border-start ps-2"
            >
              <i className="fab fa-twitter"></i>
            </a>
            <a
              target="_blank"
              href="https://www.skype.com/en/"
              rel="noreferrer"
              className="border-start ps-2"
            >
              <i className="fab fa-skype"></i>
            </a>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
