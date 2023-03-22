import logo from "./logo.svg";
import "./App.css";
import { Navbar } from "./components/Navbar/Navbar";
import HeroSections from "./components/HeroSection/HeroSections";

function App() {
     return (
          <>
               <Navbar />
               <HeroSections />
          </>
     );
}

export default App;
