import { Navbar } from "./components/Navbar/Navbar";
import HeroSections from "./components/HeroSection/HeroSections";
import Albums from "./components/AlbumsComponents/Albums";
import Crousel from "./components/Carousel/Carousel";

function App() {
     return (
          <>
               <Navbar />
               <HeroSections />
               <Albums title="Top Albums" />
               {/* <Albums title="New Albums" /> */}
          </>
     );
}

export default App;
