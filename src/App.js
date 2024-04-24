import "./styles.css";
import React, { useContext, useState } from "react";
import { DarkModeContext } from "./DarkModeContext.js";

export default function App() {
  const { isDark, toogleDarkMode } = useContext(DarkModeContext);

  Array.prototype.customMyFilter = (callback) => {
    let results = [];
    for (let i = 0; i < this.length; i++) {
      if (callback(this[i], i, this)) {
        results.push(this[i]);
      }
    }
    return results;
  };

  let spaceArr = [1, 2, 3, 4, 5];

  let result = spaceArr.customMyFilter((elem) => elem > 4);

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>

      <button onClick={toogleDarkMode}>toggle</button>

      <div className={isDark ? "darkMode" : "lightMode"}>test</div>
    </div>
  );
}

//context api bg
