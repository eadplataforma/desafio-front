"use client";
import React, { createContext, useEffect, useState } from "react";

export const ThemeContext = createContext({
  theme: "light",
  setTheme: (value: string) => {},
});

interface Props {
  children: React.ReactNode;
}

export const ThemeProvider = ({ children }: Props) => {
  const [theme, setTheme] = useState(() => {
    const storedTheme = localStorage.getItem("theme");
    return storedTheme ? storedTheme : "light";
  });

  const switchTheme = (value: string) => {
    if (value === "light") document.body.classList.remove("dark");
    else document.body.classList.remove("light");
    document.body.classList.add(value);
  };

  useEffect(() => {
    localStorage.setItem("theme", theme);
    switchTheme(theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme: theme, setTheme: setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
