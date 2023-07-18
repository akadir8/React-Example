import { createContext, useState } from "react";

export const SiteContext = createContext();

export const SiteProvider = ({ children }) => {
  const [theme, setTheme] = useState("theme");
  const [logo, setLogo] = useState("logo");

  const data = {
    theme,
    setTheme,
    logo,
    setLogo,
  };

  return <SiteContext.Provider value={data}>{children}</SiteContext.Provider>;
};
