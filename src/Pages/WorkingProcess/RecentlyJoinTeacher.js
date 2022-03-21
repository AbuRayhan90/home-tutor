import React from "react";
import Heading from "../../components/Heading/Heading";
import Person1 from "../../Assets/image/user-01.jpg";
import Person2 from "../../Assets/image/user-05.png";
import Person3 from "../../Assets/image/user-06.png";
import ButtonYellow from "./../../components/Button/ButtonYellow";
import Img1 from "../../Assets/image/01 (1).png";
import { Link, useNavigate } from "react-router-dom";

const RecentlyJoinTeacher = () => {
  const navigate = useNavigate();
  const clickHandler = () => {
    navigate("/signin");
  };
  return (
    <div>
      <div className="container py-5 text-center  px-5">
        <Heading heading1="Tutors" heading2="Joined Recently" />
        <Link
          className="d-flex justify-content-end mb-3 show_more_tutor_btn"
          to="signin"
        >
          Show More
        </Link>
        <div className="row text-start">
          <div className="col-md-4">
            <div className="card text-left">
              <div className="card-body">
                <div className=" tutor_content">
                  <img src={Person1} alt="" />
                  <div className="row ">
                    <div className="col-8">
                      <h4>James Benzion</h4>
                      <p>Pittsburgh, USA</p>
                    </div>
                    <div className="col-4">
                      <h2>$30 Hours</h2>
                    </div>
                  </div>
                  <hr />
                  <div className="row tutor_subject mb-3">
                    <div className="col-12 d-flex flex-wrap">
                      <span className=" d-inline-block px-4 py-2  rounded-pill me-2 mb-2">
                        English
                      </span>
                      <span className="d-inline-block px-4 py-2  rounded-pill me-2 mb-2">
                        American English
                      </span>
                      <span className=" d-inline-block px-4 py-2  rounded-pill me-2 mb-2">
                        Business English
                      </span>
                      <span className="d-inline-block px-4 py-2  rounded-pill me-2 mb-2">
                        Grammar
                      </span>
                    </div>
                  </div>
                  <hr />
                  <ButtonYellow
                    text="Send Message"
                    clickHandler={clickHandler}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card text-left">
              <div className="card-body">
                <div className=" tutor_content">
                  <img src={Person2} alt="" />
                  <div className="row ">
                    <div className="col-8">
                      <h4>Jack Baker</h4>
                      <p>Pittsburgh, USA</p>
                    </div>
                    <div className="col-4">
                      <h2>$30 Hours</h2>
                    </div>
                  </div>
                  <hr />
                  <div className="row tutor_subject mb-3">
                    <div className="col-12 d-flex flex-wrap">
                      <span className=" d-inline-block px-4 py-2  rounded-pill me-2 mb-2">
                        English
                      </span>
                      <span className="d-inline-block px-4 py-2  rounded-pill me-2 mb-2">
                        American English
                      </span>
                      <span className=" d-inline-block px-4 py-2  rounded-pill me-2 mb-2">
                        Business English
                      </span>
                      <span className="d-inline-block px-4 py-2  rounded-pill me-2 mb-2">
                        Grammar
                      </span>
                    </div>
                  </div>
                  <hr />
                  <ButtonYellow
                    text="Send Message"
                    clickHandler={clickHandler}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card text-left">
              <div className="card-body">
                <div className="tutor_content">
                  <img src={Person3} alt="" />
                  <div className="row ">
                    <div className="col-8">
                      <h4>Jesica Walker</h4>
                      <p>Pittsburgh, USA</p>
                    </div>
                    <div className="col-4">
                      <h2>$30 Hours</h2>
                    </div>
                  </div>
                </div>
                <hr />
                <div className="row tutor_subject mb-3">
                  <div className="col-12 d-flex flex-wrap">
                    <span className=" d-inline-block px-4 py-2  rounded-pill me-2 mb-2">
                      English
                    </span>
                    <span className="d-inline-block px-4 py-2  rounded-pill me-2 mb-2">
                      American English
                    </span>
                    <span className=" d-inline-block px-4 py-2  rounded-pill me-2 mb-2">
                      Business English
                    </span>
                    <span className="d-inline-block px-4 py-2  rounded-pill me-2 mb-2">
                      Grammar
                    </span>
                  </div>
                </div>
                <hr />
                <ButtonYellow text="Send Message" clickHandle={clickHandler} />
              </div>
            </div>
          </div>
        </div>
        <div className="row text center mt-5 py-5">
          <Heading heading1="How It Works" heading2="For Tutors ?" />
          <div className="col-md-4 pt-5 ">
            <div className="card shadow py-4 tutor_work_bg1">
              <div className="card-body">
                <img className="img-fluid mb-3" src={Img1} alt="" />
                <h3 className="card-title">Create A Free Account Now</h3>
                <p className="card-text">
                  Advantage old hTad otherwise sincerity dependent additions.
                  Six draw you him full not mean evil. Prepare garrets it
                  expense.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4 pt-5 ">
            <div className="card shadow py-4 tutor_work_bg2">
              <div className="card-body">
                <img className="img-fluid mb-3" src={Img1} alt="" />
                <h3 className="card-title">Create A Free Account Now</h3>
                <p className="card-text">
                  Advantage old hTad otherwise sincerity dependent additions.
                  Six draw you him full not mean evil. Prepare garrets it
                  expense.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4 pt-5 ">
            <div className="card shadow py-4 tutor_work_bg3">
              <div className="card-body">
                <img className="img-fluid mb-3" src={Img1} alt="" />
                <h3 className="card-title">Create A Free Account Now</h3>
                <p className="card-text">
                  Advantage old hTad otherwise sincerity dependent additions.
                  Six draw you him full not mean evil. Prepare garrets it
                  expense.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecentlyJoinTeacher;
