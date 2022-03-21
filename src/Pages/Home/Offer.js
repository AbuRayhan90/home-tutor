import React from "react";
import Heading from "../../components/Heading/Heading";
import Img_1 from "../../Assets/image/011.png";
import Img_2 from "../../Assets/image/022.png";
import Img_3 from "../../Assets/image/033.png";
import Img_4 from "../../Assets/image/04.png";
import Img_5 from "../../Assets/image/05.png";
import Img_6 from "../../Assets/image/06.png";

const Offer = () => {
  return (
    <div className="container py-5 my-5 offer_section text-center  mx-auto">
      <Heading heading1="What" heading2="We Offer" />
      <div className="row gy-3 text-center mt-5 pt-5">
        <div className="col-md-4 mb-3 mb-3">
          <img src={Img_1} alt="" />
          <h3 className="my-3">Home Tutoring</h3>
          <p>
            His exquisite sincerity education shameless ten earnestly breakfast.
            Scale began quiet up short wrong in Personal attention.
          </p>
        </div>
        <div className="col-md-4 mb-3">
          <img src={Img_2} alt="" />
          <h3 className="my-3">Online Tutoring</h3>
          <p>
            His exquisite sincerity education shameless ten earnestly breakfast.
            Scale began quiet up short wrong in Personal attention.
          </p>
        </div>
        <div className="col-md-4 mb-3">
          <img src={Img_3} alt="" />
          <h3 className="my-3">Group Tutoring</h3>
          <p>
            His exquisite sincerity education shameless ten earnestly breakfast.
            Scale began quiet up short wrong in Personal attention.
          </p>
        </div>
      </div>
      <div className="row text-center">
        <div className="col-md-4 mb-3">
          <img src={Img_4} alt="" />
          <h3 className="my-3">Package Tutoring</h3>
          <p>
            His exquisite sincerity education shameless ten earnestly breakfast.
            Scale began quiet up short wrong in Personal attention.
          </p>
        </div>
        <div className="col-md-4 mb-3">
          <img src={Img_5} alt="" />
          <h3 className="my-3">Home Tutoring</h3>
          <p>
            His exquisite sincerity education shameless ten earnestly breakfast.
            Scale began quiet up short wrong in Personal attention.
          </p>
        </div>
        <div className="col-md-4 mb-3">
          <img src={Img_6} alt="" />
          <h3 className="my-3">Offline Tutoring</h3>
          <p>
            His exquisite sincerity education shameless ten earnestly breakfast.
            Scale began quiet up short wrong in Personal attention.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Offer;
