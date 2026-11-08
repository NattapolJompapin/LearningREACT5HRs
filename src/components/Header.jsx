import "./Header.css";
import {MdSunny} from "react-icons/md";
import {BsFillMoonStarsFill} from "react-icons/bs";

const Header = ({ title, theme, setTheme }) => {
  function toggleTheme() {
    if (theme === "Light") {
      setTheme("Dark");
    } else {
      setTheme("Light");
    }
  }

  return (
    <nav>
      <h1>REACT LEARNING {title}</h1>
      <span onClick={toggleTheme}>
        {theme==="Light" ? <MdSunny size={25}/> : <BsFillMoonStarsFill size={25}/>}
      </span>
    </nav>
  );
};

export default Header;
