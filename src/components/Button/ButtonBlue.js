import "./style.css";

const ButtonBlue = ({ text, radius, clickHandler }) => {
  return (
    <>
      <button
        onClick={clickHandler}
        className={`${radius} ? ${radius} menuBtn : menuBtn`}
      >
        {text}
      </button>
    </>
  );
};

export default ButtonBlue;
