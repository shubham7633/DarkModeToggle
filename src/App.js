import "./styles.css";
import React, { useContext, useState } from "react";
import { DarkModeContext } from "./DarkModeContext.js";

export default function App() {
  const { isDark, toogleDarkMode } = useContext(DarkModeContext);

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>

      <button onClick={toogleDarkMode}>toggle</button>

      <div className={isDark ? "darkMode" : "lightMode"}>test</div>
    </div>
  );
}

//context api bg
