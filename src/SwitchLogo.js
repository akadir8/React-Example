import { useContext } from "react";
import { SiteContext } from "./context/SiteContext";


function SwitchLogo() {
  const { logo, setLogo } = useContext(SiteContext);

  return (
    <>
      Mevcut logo = {logo} <br />
      <button
        className="bg-slate-600"
        onClick={() => setLogo(logo === "red" ? "white" : "red")}
      >
        Logo değiştir
      </button>
    </>
  );
}

export default SwitchLogo;
