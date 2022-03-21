import React from "react";
import Heading from "../../components/Heading/Heading";
import Img_1 from "../../Assets/image/01.png";
import Img_2 from "../../Assets/image/02.png";
import Img_3 from "../../Assets/image/03.png";
import FreeClsImg from "../../Assets/image/free-class.png";
import ButtonBlue from "./../../components/Button/ButtonBlue";
import { useNavigate } from "react-router-dom";

const WorkingProcess = () => {
  const navigate = useNavigate();
  const clickHandler = () => {
    navigate("/signin");
  };
  return (
    <div>
      <div className="container py-5">
        <div className="row d-flex justify-content-center">
          <div className="col-md-6 text-center">
            <Heading
              heading1="How"
              heading2="It Works"
              heading3="For Students/Parents?"
            />
          </div>
        </div>

        <div className="row mt-5 ">
          <div className="col-md-4  text-center ">
            <div className=" p-3 shadow">
              <img className="img-fluid " src={Img_1} alt="" />
              <h3>Tell Us Where You Need Help</h3>
              <p>
                His exquisite sincerity education shameless ten earnestly
                breakfast. Scale began quiet up short wrong in Personal
                attention.
              </p>
            </div>
          </div>
          <div className="col-md-4  text-center">
            <div className="p-3 shadow">
              <img src={Img_2} alt="" />
              <h3>Choose The Tutor You Want</h3>
              <p>
                His exquisite sincerity education shameless ten earnestly
                breakfast. Scale began quiet up short wrong in Personal
                attention.
              </p>
            </div>
          </div>
          <div className="col-md-4  text-center">
            <div className="p-3 shadow">
              <img src={Img_3} alt="" />
              <h3>Book A Tutor Start Lesson</h3>
              <p>
                His exquisite sincerity education shameless ten earnestly
                breakfast. Scale began quiet up short wrong in Personal
                attention.
              </p>
            </div>
          </div>
        </div>
        <div className="row mt-5 py-5 d-flex align-items-center">
          <div className="col-md-6">
            <img className="img-fluid" src={FreeClsImg} alt="" />
          </div>
          <div className="col-md-6 ">
            <Heading heading1="Request A Class" />
            <Heading heading2="For FREE Trail" />
            <p>
              Weddings and any opinions suitable smallest nay. My he houses or
              months settle remove ladies appear. Engrossed suffering supposing
              he recommend. Commanded no of depending extremity recommend
              attention tolerably.
            </p>
            <ButtonBlue text="Search Tutor" clickHandler={clickHandler} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkingProcess;
