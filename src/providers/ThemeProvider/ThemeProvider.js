import React, { createContext, useState } from "react";

const theme = "light";
//themeContext is a Data structure that is used by react for storing internal data for the providers.
//create Context is available intenally in React and the default value of context is theme which is "light".
//Now this will create a seperate area  for storing data named ThemeContext in react
export const ThemeContext = createContext(theme);

//destructing ProviderComponent from themecontext to wrap the entire components which will be the actual theme provider component
const { Provider } = ThemeContext;

//provider components have one props by default called childern(anything inside two tags is called children prop)
const ThemeProvider = ({ children }) => {
  const [mode, setMode] = useState("light");
  const toggleMode = () => {
    setMode(mode === "light" ? "dark" : "light");
  };
  return (
    // This value indicates the value you see in react.provider inspect section.since it is a provider whenever the change occurs in the toggle it will affect the entire components.
    <Provider value={{ mode, toggleMode }}>{children}</Provider>
  );
};

export default ThemeProvider;
