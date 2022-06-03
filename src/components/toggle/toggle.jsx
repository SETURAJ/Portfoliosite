import React,{ useContext } from 'react'
import "./toggle.css"
import Sun from "../../img/sun.webp"
import Moon from "../../img/moon.webp"
import { ThemeContext } from "../../context";
const Toggle = () => {
  const theme = useContext(ThemeContext);

  const handleClick = () => {
    theme.dispatch({ type: "TOGGLE" });
  };
  return (
    <div className="t">
        <img src={Sun} alt="" className="t-icon"></img>
        <img src={Moon} alt="" className="t-icon"></img>
      <div className="t-button"
      onClick={handleClick}
      style={{ left: theme.state.darkMode ? 0 : 25 }}
      ></div>
    </div>
  )
}

export default Toggle