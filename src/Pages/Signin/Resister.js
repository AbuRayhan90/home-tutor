import React from "react";
import { Link } from "react-router-dom";
import ButtonYellow from "../../components/Button/ButtonYellow";
import "./style.css";

const Resister = () => {
  const clickHandler = () => {
    alert("Testing Resister");
  };
  return (
    <div className="signInBg overflow-hidden">
      <div className="container mx-auto">
        <div className="row">
          <div className="col-md-6  mx-auto">
            <div className="signup-form">
              <h2>Register</h2>
              <p className="hint-text">
                Create your account. It's free and only takes a minute.
              </p>
              <div className="form-group">
                <div className="row mb-3">
                  <div className="col">
                    <input
                      type="text"
                      className="form-control"
                      name="first_name"
                      placeholder="First Name"
                      required="required"
                    />
                  </div>
                  <div className="col">
                    <input
                      type="text"
                      className="form-control"
                      name="last_name"
                      placeholder="Last Name"
                      required="required"
                    />
                  </div>
                </div>
              </div>
              <div className="form-group">
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  placeholder="Email"
                  required="required"
                />
              </div>
              <div className="form-group my-3">
                <input
                  type="password"
                  className="form-control"
                  name="password"
                  placeholder="Password"
                  required="required"
                />
              </div>
              <div className="form-group">
                <input
                  type="password"
                  className="form-control"
                  name="confirm_password"
                  placeholder="Confirm Password"
                  required="required"
                />
              </div>
              <div className="form-group my-3">
                <label className="form-check-label">
                  <input type="checkbox" required="required" /> I accept the
                  <Link to="/" className="text-white-50">
                    {" "}
                    Terms of Use
                  </Link>{" "}
                  &amp;
                  <Link to="/" className="text-white-50">
                    {" "}
                    Privacy Policy
                  </Link>
                </label>
              </div>
              <div className="form-group text-center my-3">
                <ButtonYellow text="Resister Now" clickHandler={clickHandler} />
              </div>
              <div className="text-center">
                <span>Already have an account? </span>
                <Link to="/signin" className="create_account fw-bold">
                  Sign in
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resister;
