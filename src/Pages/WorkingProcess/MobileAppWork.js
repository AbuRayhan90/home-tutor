import React from "react";
import Heading from "../../components/Heading/Heading";
import ButtonBlue from "../../components/Button/ButtonBlue";
import AppImg from "../../Assets/image/mobile-app.png";
import { useNavigate } from "react-router-dom";

const MobileAppWork = () => {
  const navigate = useNavigate();
  const clickHandler = () => {
    navigate("/signin");
  };
  return (
    <div className="container py-5 my-5 mx-auto">
      <div className="row d-flex align-items-center">
        <div className="col-md-4">
          <Heading heading1="Our" heading2="Mobile App" />
          <p className="my-3">
            Weddings and any opinions suitable smallest nay. My he houses or
            months settle remove ladies appear. Engrossed suffering supposing he
            recommend. Commanded no of depending extremity recommend attention
            tolerably.
          </p>
          <ButtonBlue text="Search Tutor" clickHandler={clickHandler} />
        </div>
        <div className="col-md-8 d-flex justify-content-end mt-5 md-mt-0">
          <img className="img-fluid" src={AppImg} alt="" />
        </div>
      </div>
    </div>
  );
};

export default MobileAppWork;
