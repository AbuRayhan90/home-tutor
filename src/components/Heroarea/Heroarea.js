import React from 'react';
import AreaSelect from '../InputArea/AreaSelect';
import './style.css';
import ButtonYellow from './../Button/ButtonYellow';

const Heroarea = () => {
  return (
    <div className="heroarea_bg  d-flex align-items-center justify-content-center">
      <div className="container">
        <div className="row ">
          <div className="col-md-6">
            <div className="text-white">
              <h1 className="heroarea_tilte">
                Fine The <br /> <span>Perfect Tutor</span> for Online & Offline
              </h1>
              <p className="text-white">Education now more esay then before</p>
            </div>
          </div>
          <div className="col-md-6 from_bg">
            <div className="row my-3">
              <div className="col-md-6">
                <AreaSelect
                  optn_1="Mirpur"
                  optn_2="Shamoli"
                  optn_3="Agargawon"
                  optn_4="Taltola"
                />
              </div>
              <div className="col-md-6">
                <AreaSelect
                  optn_1="Mirpur"
                  optn_2="Shamoli"
                  optn_3="Agargawon"
                  optn_4="Taltola"
                />
              </div>
            </div>
            <div className="row my-3">
              <div className="col-md-6">
                <AreaSelect
                  optn_1="Mirpur"
                  optn_2="Shamoli"
                  optn_3="Agargawon"
                  optn_4="Taltola"
                />
              </div>
              <div className="col-md-6">
                <AreaSelect
                  optn_1="Mirpur"
                  optn_2="Shamoli"
                  optn_3="Agargawon"
                  optn_4="Taltola"
                />
              </div>
            </div>
            <div className="row my-3">
              <div className="col-md-6">
                <AreaSelect
                  optn_1="Mirpur"
                  optn_2="Shamoli"
                  optn_3="Agargawon"
                  optn_4="Taltola"
                />
              </div>
              <div className="col-md-6">
                <AreaSelect
                  optn_1="Mirpur"
                  optn_2="Shamoli"
                  optn_3="Agargawon"
                  optn_4="Taltola"
                />
              </div>
            </div>
            <div className="row my-3">
              <div className="col-md-6">
                <AreaSelect
                  optn_1="Mirpur"
                  optn_2="Shamoli"
                  optn_3="Agargawon"
                  optn_4="Taltola"
                />
              </div>
              <div className="col-md-6">
                <AreaSelect
                  optn_1="Mirpur"
                  optn_2="Shamoli"
                  optn_3="Agargawon"
                  optn_4="Taltola"
                />
              </div>
            </div>
            <ButtonYellow text="Search Tutor" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Heroarea;
