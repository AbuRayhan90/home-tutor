import React, { useState } from "react";
import ButtonBlue from "../../components/Button/ButtonBlue";
import Heading from "../../components/Heading/Heading";
import VideoImg from "../../Assets/image/video-thumb-3.jpg";
import VideoBtn from "../../Assets/image/video-btn.png";

import "./style.css";
import { useNavigate } from "react-router-dom";

const VideoPlay = ({ setIsOpen }) => {
  return (
    <div className="popUp_video">
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/n-fimuA21No"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
      <i
        onClick={() => !setIsOpen(false)}
        className="fa fa-times close_btn text-white fs-3"
        aria-hidden="true"
      ></i>
    </div>
  );
};
const About = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const clickHandler = () => {
    navigate("/about");
  };

  return (
    <div className="about_bg ">
      <div className="container ">
        <div className="row row d-flex justify-content-center">
          <div className="col-8  text-center">
            <div className="about_content">
              {isOpen ? (
                <VideoPlay setIsOpen={setIsOpen} />
              ) : (
                <div onClick={() => !setIsOpen(true)}>
                  <div className="video_section">
                    <img className="video_img " src={VideoImg} alt="" />
                    <img className="videoBtn" src={VideoBtn} alt="" />
                  </div>
                </div>
              )}
              <Heading
                heading1="What Some Awesome Parent Says "
                heading2="About Us"
              />
              <p>
                Weddings and any opinions suitable smallest nay. My he houses or
                months settle remove ladies appear. Engrossed suffering
                supposing he recommend.
              </p>
              <ButtonBlue text="About Us" clickHandler={clickHandler} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
