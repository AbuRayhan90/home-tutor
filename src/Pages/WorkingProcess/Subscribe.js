import React from 'react';
import ButtonBlue from '../../components/Button/ButtonBlue';
import Heading from '../../components/Heading/Heading';
import './style.css';

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
          <div class="input-group mb-3">
            <input
              type="text"
              class="form-control"
              placeholder="yourmail@gmail.com"
              aria-label="Recipient's username"
              aria-describedby="basic-addon2"
            />

            <ButtonBlue text="Subscribe Us" radius="rounded-0" />
          </div>
        </div>
      </div>
      <div className="row d-flex justify-content-between mt-4 ">
        <div className="col-md-10 p-0">
          <ul className="d-flex subscribe_menu">
            <li>
              <a href="">Home Tutor</a>
            </li>
            <li className="mx-3  ">
              <a href="">Online Class</a>
            </li>
            <li className="mx-3">
              <a href="">About</a>
            </li>
            <li className="mx-3">
              <a href="">Courses</a>
            </li>
            <li className="mx-3">
              <a href=""> Blog</a>
            </li>
            <li>
              <a href="">Contact us</a>
            </li>
          </ul>
        </div>
        <div className="col-md-2 p-0">
          <ul className="d-flex  justify-content-around social_icons">
            <a href="">
              <i className="fab fa-facebook-f "></i>
            </a>
            <a href="" className="border-start ps-2">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="" className="border-start ps-2">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="" className="border-start ps-2">
              <i className="fab fa-skype"></i>
            </a>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
