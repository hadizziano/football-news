import "./header.css";
const Header = () => {
  return (
    <div className="mainheader">
      <p className="animatedtext">Football is the life</p>
      <p className="subanimatedtext">
        Football is the life
        <br /> this is only a text <br /> and this is a new line
      </p>

      <input className="search" type="search" placeholder="Type here" />
    </div>
  );
};
export default Header;
