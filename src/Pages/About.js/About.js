import React, { useState } from 'react';
import ButtonBlue from '../../components/Button/ButtonBlue';
import Heading from '../../components/Heading/Heading';
import VideoImg from '../../Assets/image/video-thumb-3.jpg';
import VideoBtn from '../../Assets/image/video-btn.png';
import './style.css';

const VideoPlay = () => {
  return (
    <div className="popUp_video">
      <iframe
        width="100%"
        height="350px"
        src="https://www.youtube.com/embed/AhP5Tg_BLIk"
        title="YouTube video player"
        frameborder=""
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </div>
  );
};
const About = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="about_bg ">
      <div className="container ">
        <div className="row row d-flex justify-content-center">
          <div className="col-8  text-center">
            <div className="about_content">
              {isOpen ? (
                <VideoPlay />
              ) : (
                <a onClick={() => !setIsOpen(true)}>
                  <div className="video_section">
                    <img className="video_img " src={VideoImg} alt="" />
                    <img className="videoBtn" src={VideoBtn} alt="" />
                  </div>
                </a>
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
              <ButtonBlue text="About Us" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
