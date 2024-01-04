import React, { createContext, useState } from "react";
const darkMode = createContext();
function Darkmode(props) {
  const [mode, setMode] = useState("light");
  const toggle = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#313645";
      document.body.style.color = "white ";

    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";

    }
  };
  return (
    <darkMode.Provider value={{ mode, toggle }}>
      {props.children}
    </darkMode.Provider>
  );
}

export default Darkmode;
export { darkMode };
