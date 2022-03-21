import React, { useState, useEffect } from "react";
import "./style.css";
import ButtonYellow from "./../Button/ButtonYellow";
import { useNavigate } from "react-router-dom";

const Heroarea = () => {
  const [countries, setCountries] = useState([]);
  const [country, setCountry] = useState("");
  // const [countries, setCountries] = useState([{ name: "Select Country" }]);
  // const [countries, setCountries] = useState([{ name: "Select Country" }]);
  // const [countries, setCountries] = useState([{ name: "Select Country" }]);

  const loadCountry = async () => {
    const url = await fetch("https://restcountries.com/v2/all");
    const res = url.json();
    setCountries(await res);
  };

  const valueHanlder = (e) => {
    const countryName = e.target.value;
    setCountry(countryName);
  };
  console.log(country);
  useEffect(() => {
    loadCountry();
  }, []);
  const navigate = useNavigate();
  const clickHandler = () => {
    navigate("/signin");
  };
  return (
    <div className="heroarea_bg  d-flex align-items-center justify-content-center">
      <div className="container mx-auto">
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
                <select className="area_select" name="" id="">
                  <option value="">--Select Upozila--</option>
                  <option value="">Dewangonj</option>
                  <option value="">Menlandah</option>
                  <option value="">Madargonj</option>
                </select>
              </div>
              <div className="col-md-6 mt-3 mt-md-0">
                <select className="area_select" name="" id="">
                  <option value="">--Select District--</option>
                  <option value="">Jamalpur</option>
                  <option value="">Foridpur</option>
                  <option value="">Nator</option>
                </select>
              </div>
            </div>
            <div className="row my-3">
              <div className="col-md-6 ">
                <select className="area_select" name="" id="">
                  <option value="">--Select Division--</option>
                  <option value="">Bogura</option>
                  <option value="">Rangpur</option>
                  <option value="">Dinajpur</option>
                  <option value="">Dhaka</option>
                  <option value="">Meymensingh</option>
                </select>
              </div>
              <div className="col-md-6 mt-3 mt-md-0">
                <select className="area_select" name="" id="">
                  <option value="">--Select City--</option>
                  <option value="">Dhaka</option>
                  <option value="">Mymensing</option>
                  <option value="">Gazipur</option>
                  <option value="">Rajshahi</option>
                </select>
              </div>
            </div>
            <div className="row my-3">
              <div className="col-md-12">
                <select
                  className="area_select"
                  onChange={(e) => valueHanlder(e)}
                >
                  <option value=""> --Select Country--</option>
                  {countries.map((country) => (
                    <option key={country.numericCode} value={country.name}>
                      {country.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <ButtonYellow text="Search Tutor" clickHandler={clickHandler} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Heroarea;
