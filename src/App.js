import logo from "./logo.svg";
import "./App.css";
import DinoDao from "./Components/DinoDao";
import About from "./Components/About";
import Tokenomics from "./Components/Tokenomics";
import Roadmap from "./Components/Roadmap";
import Nft from "./Components/Nft";
import Partnership from "./Components/Partnership";
import DinoDao1 from "./Components/DinoDao1";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <main>
      <div className="App">
        <DinoDao/>
        <About/>
        <Tokenomics/>
        <Roadmap/>
        <Nft/>
        <Partnership/>
        <DinoDao1/>
      </div>
    </main>
  );
}

export default App;
