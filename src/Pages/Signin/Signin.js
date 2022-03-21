import React from "react";
import { Link } from "react-router-dom";
import ButtonYellow from "../../components/Button/ButtonYellow";
import "./style.css";
const Signin = () => {
  const clickHandler = () => {
    alert("Testing Singup");
  };
  return (
    <div className="signInBg">
      <div className="container">
        <div className="row pt-5">
          <div className="col-md-4  mx-auto">
            <div className="signup-form">
              <h2 className="text-center py-3">Sign in</h2>
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
              <div className="form-group text-center my-3">
                <ButtonYellow clickHandler={clickHandler} text="Sign in" />
              </div>
              <div className="text-center">
                <Link to="/resister" className="fw-bold fs-5 create_account">
                  Create an account
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signin;
