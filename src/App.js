import { SiteProvider } from "./context/SiteContext";
import Home from "./Home";

function App() {
  return (
    <SiteProvider>
      <Home />
    </SiteProvider>
  );
}

export default App;
