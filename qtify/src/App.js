import logo from "./logo.svg";
import "./App.css";
import { Navbar } from "./components/Navbar/Navbar";
import HeroSections from "./components/HeroSection/HeroSections";
import CartComponent from "./components/CartComponent/CartComponent";

function App() {
     return (
          <>
               <Navbar />
               <HeroSections />
               <CartComponent />
          </>
     );
}

export default App;
