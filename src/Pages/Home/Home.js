import React from 'react';
import NavbarComponent from '../../components/Navbar/NavbarComponent';
import Heroarea from '../../components/Heroarea/Heroarea';
import Offer from './Offer';
import About from '../About.js/About';
import WorkingProcess from '../WorkingProcess/WorkingProcess';
import Subject from '../WorkingProcess/Subject';
import RecentlyJoinTeacher from '../WorkingProcess/RecentlyJoinTeacher';
import HappyTotur from '../HappyTotur/HappyTotur';
import MobileAppWork from '../WorkingProcess/MobileAppWork';
import Subscribe from '../WorkingProcess/Subscribe';
import Footer from '../WorkingProcess/Footer';

const Home = () => {
  return (
    <>
      <NavbarComponent />
      <Heroarea />
      <Offer />
      <About />
      <WorkingProcess />
      <Subject />
      <RecentlyJoinTeacher />
      <HappyTotur />
      <MobileAppWork />
      <Subscribe />
      <Footer />
    </>
  );
};

export default Home;
