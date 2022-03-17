import './style.css';

const ButtonBlue = ({ text, radius }) => {
  return (
    <>
      <button class={`${radius} ? ${radius} menuBtn : menuBtn`}>{text}</button>
    </>
  );
};

export default ButtonBlue;
