import logo from "./logo.svg";
import "./App.css";
import DinoDao from "./Components/DinoDao";
import About from "./Components/About";
import Tokenomics from "./Components/Tokenomics";
import Roadmap from "./Components/Roadmap";
import Nft from "./Components/Nft";
import Partnership from "./Components/Partnership";
import DinoDao1 from "./Components/DinoDao1";
import "./fonts/Chewy-Regular.ttf";
import "./fonts/LuckyDino-3z6Ay.otf"
import "./fonts/PaytoneOne-Regular.ttf"

function App() {
  return (
    <div className="App">
      <DinoDao />
      <About/>
      <Tokenomics/>
      <Roadmap/>
      <Nft/>
      <Partnership/>
      <DinoDao1></DinoDao1>
      

    </div>
  );
}

export default App;
