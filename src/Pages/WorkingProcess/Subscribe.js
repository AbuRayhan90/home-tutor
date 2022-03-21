import React from "react";
import { NavLink } from "react-router-dom";
import ButtonBlue from "../../components/Button/ButtonBlue";
import Heading from "../../components/Heading/Heading";
import "./style.css";

const Subscribe = () => {
  let activeStyle = {
    fontWeight: "700",
    color: "#001e92",
  };
  return (
    <div className="container pt-5 mx-auto">
      <div className="row d-flex align-items-center subcribe_bg px-4 py-5">
        <div className="col-md-4 ">
          <Heading heading1="Newsletter" />
          <p className="mt-3">
            My he houses or months settle remove ladies appear. Engrossed
            suffering he recommend.
          </p>
        </div>
        <div className="col-md-6 offset-md-2">
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
          <ul className="d-flex flex-wrap subscribe_menu">
            <li className="nav-item">
              <NavLink
                className="nav-link "
                aria-current="page"
                to="/"
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link "
                to="/about"
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
              >
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link"
                to="/courses"
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
              >
                Courses
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link"
                to="/blog"
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
              >
                Blog
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                className="nav-link"
                to="/contact"
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
              >
                Contact Us
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link"
                to="/signin"
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
              >
                Signin
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="col-md-2 col-12 md-p-0 ">
          <ul className="d-flex justify-content-around social_icons">
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
