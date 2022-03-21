import React from "react";
import Logo from "../../Assets/image/logo-2.png";
import ButtonBlue from "../Button/ButtonBlue";
import { NavLink, useNavigate } from "react-router-dom";

const NavbarComponent = () => {
  const navigate = useNavigate();
  const clickHandler = () => {
    navigate("/signin");
  };
  let activeStyle = {
    fontWeight: "700",
    color: "#001e92",
  };
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <NavLink className="navbar-brand" to="/">
            <img src={Logo} alt="" />
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 me-3 fw-normal ">
              <li className="nav-item">
                <NavLink
                  style={({ isActive }) => (isActive ? activeStyle : undefined)}
                  className="nav-link "
                  aria-current="page"
                  to="/"
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
            <ButtonBlue text="Become A Tutor" clickHandler={clickHandler} />
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavbarComponent;
