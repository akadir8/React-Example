import { useContext } from "react";
import { SiteContext } from "./context/SiteContext";

function SwitchTheme(){

    const { theme ,setTheme} = useContext(SiteContext)

 return <>
    Mevcut tema = {theme} <br />
    <button className="bg-slate-600" onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
      Temayı değiştir
    </button>
  </>;
};

export default SwitchTheme;