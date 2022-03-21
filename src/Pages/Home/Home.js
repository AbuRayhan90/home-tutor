import React from "react";
import Heroarea from "../../components/Heroarea/Heroarea";
import Offer from "./Offer";
import About from "../About.js/About";
import WorkingProcess from "../WorkingProcess/WorkingProcess";
import Subject from "../WorkingProcess/Subject";
import RecentlyJoinTeacher from "../WorkingProcess/RecentlyJoinTeacher";
import HappyTutor from "../HappyTotur/HappyTutor";
import MobileAppWork from "../WorkingProcess/MobileAppWork";
import Subscribe from "../WorkingProcess/Subscribe";
import Footer from "../WorkingProcess/Footer";

const Home = () => {
  return (
    <>
      <Heroarea />
      <Offer />
      <About />
      <WorkingProcess />
      <Subject />
      <RecentlyJoinTeacher />
      <HappyTutor />
      <MobileAppWork />
      <Subscribe />
      <Footer />
    </>
  );
};

export default Home;
