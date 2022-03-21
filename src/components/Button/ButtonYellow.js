import React from "react";

const ButtonYellow = ({ text, clickHandler }) => {
  return (
    <>
      <button onClick={clickHandler} className="btnYellow">
        {text}
      </button>
    </>
  );
};

export default ButtonYellow;
