import React from 'react';
import Heading from '../../components/Heading/Heading';
import Img1 from '../../Assets/image/07.png';
import Img2 from '../../Assets/image/08.png';
import Img3 from '../../Assets/image/06 (1).png';
import Img4 from '../../Assets/image/01 (3).png';
import Img5 from '../../Assets/image/04 (1).png';
import Img6 from '../../Assets/image/06 (1).png';
import Img7 from '../../Assets/image/04 (1).png';
import Img8 from '../../Assets/image/07.png';
import './style.css';
import ButtonYellow from './../../components/Button/ButtonYellow';

const Subject = () => {
  return (
    <div className="subject_bg">
      <div className="container text-center py-5 ">
        <Heading
          heading1="Find"
          heading2="Online Tutors"
          heading3="In Any Subject"
          color="text-white"
        />
        <div className="row text-white mt-5 pt-5 ">
          <div className="col-md-3">
            <img src={Img1} alt="" />
            <h4>Data Science</h4>
          </div>
          <div className="col-md-3">
            <img src={Img2} alt="" />
            <h4>English</h4>
          </div>
          <div className="col-md-3">
            <img src={Img3} alt="" />
            <h4>Engineering</h4>
          </div>
          <div className="col-md-3">
            <img src={Img4} alt="" />
            <h4>History</h4>
          </div>
        </div>
        <div className="row my-4 text-white pb-5 mt-5">
          <div className="col-md-3">
            <img src={Img5} alt="" />
            <h4>Computer Science</h4>
          </div>
          <div className="col-md-3">
            <img src={Img6} alt="" />
            <h4>Medical</h4>
          </div>
          <div className="col-md-3">
            <img src={Img7} alt="" />
            <h4>Social Science</h4>
          </div>
          <div className="col-md-3">
            <img src={Img8} alt="" />
            <h4>Data Science</h4>
          </div>
        </div>
        <div class="row d-flex justify-content-center">
          <div className="col-md-2">
            <ButtonYellow text="See all Subject" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subject;
