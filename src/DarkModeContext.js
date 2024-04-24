import React, { createContext, useState } from "react";

const DarkModeContext = createContext();

const DarkModeProvider = ({ children }) => {
  const [isDark, setIsDark] = useState(false);

  const toogleDarkMode = () => {
    setIsDark(!isDark);
  };

  return (
    <DarkModeContext.Provider value={{ isDark, toogleDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
};

export { DarkModeContext, DarkModeProvider };
