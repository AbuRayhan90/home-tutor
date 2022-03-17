import React from 'react';
import './style.css';

const AreaSelect = ({ optn_1, optn_2, optn_3, optn_4 }) => {
  return (
    <div className="area_content">
      <select className="area_select " id="cars" name="cars">
        <option value="volvo">Select Area</option>
        <option value="saab">{optn_1}</option>
        <option value="saab">{optn_2}</option>
        <option value="saab">{optn_3}</option>
        <option value="saab">{optn_4}</option>
      </select>
    </div>
  );
};

export default AreaSelect;
