import React from "react";
import Heading from "../../components/Heading/Heading";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Tutor1 from "../../Assets/image/user-01.jpg";
import Tutor2 from "../../Assets/image/user-05.png";
import Tutor3 from "../../Assets/image/user-06.png";
import "./style.css";

const HappyTutor = () => {
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 3,
    speed: 500,
    dots: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="happyTotur_bg py-5 overflow-hidden">
      <div className="container text-center mt-5 mx-auto">
        <Heading heading1="Happy" heading2="Tutors Say" />
        <div className="row mt-5">
          <Slider {...settings}>
            <div className="col-md-3">
              <div className=" Tutor_say_content bg-white px-3  py-4 text-start me-4">
                <p>
                  Left till here away at to whom past. Feelings laughing at no
                  wondered repeated provided finished. It acceptance thoro
                  advantages.
                </p>
                <div className="row d-flex align-items-center">
                  <div className="col-md-3 ">
                    <img className="img-fluid" src={Tutor1} alt="" />
                  </div>
                  <div className="col-md-8 pt-2">
                    <h4>Jesmin Walker</h4>
                    <p>Khulnala, UAE</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className=" Tutor_say_content bg-white px-3  py-4 text-start me-4">
                <p>
                  Left till here away at to whom past. Feelings laughing at no
                  wondered repeated provided finished. It acceptance thoro
                  advantages.
                </p>
                <div className="row d-flex align-items-center">
                  <div className="col-md-3 ">
                    <img className="img-fluid" src={Tutor2} alt="" />
                  </div>
                  <div className="col-md-8 pt-2">
                    <h4>Stiven</h4>
                    <p>Khulnala, UAE</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className=" Tutor_say_content bg-white px-3  py-4 text-start me-4">
                <p>
                  Left till here away at to whom past. Feelings laughing at no
                  wondered repeated provided finished. It acceptance thoro
                  advantages.
                </p>
                <div className="row d-flex align-items-center">
                  <div className="col-md-3 ">
                    <img className="img-fluid" src={Tutor3} alt="" />
                  </div>
                  <div className="col-md-8 pt-2">
                    <h4>Mark Walker</h4>
                    <p>California, Australia</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className=" Tutor_say_content bg-white px-3  py-4 text-start me-4">
                <p>
                  Left till here away at to whom past. Feelings laughing at no
                  wondered repeated provided finished. It acceptance thoro
                  advantages.
                </p>
                <div className="row d-flex align-items-center">
                  <div className="col-md-3 ">
                    <img className="img-fluid" src={Tutor1} alt="" />
                  </div>
                  <div className="col-md-8 pt-2">
                    <h4>Jesmin Walker</h4>
                    <p>Khulnala, UAE</p>
                  </div>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default HappyTutor;
